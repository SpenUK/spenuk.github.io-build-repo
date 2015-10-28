'use strict';

module.exports = function (grunt) {
	
  // Loading tasks Manually
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-shell');

  grunt.loadNpmTasks('grunt-contrib-handlebars');

  grunt.loadNpmTasks('grunt-browserify');

  grunt.loadNpmTasks('grunt-sftp-deploy');

	// Configurable paths
  var config = {
    app: 'app',
    dist: '../spenuk.github.io',
    // build: 'build.js',
    jsfolder: '/js',
    sassfolder: '/styles/sass',
    cssfolder: '/styles/css'
  };

  grunt.initConfig({

  	// Referencing globally defined configurable paths
  	config: config,


    'sftp-deploy': {
      dev: {
        auth: {
          host: '<~ hostname ~>',
          port: 22,
          authKey: 'key1'

          // "key1" refers to a key set in the .ftppass file.
          // This is ignored by git (for security reasons) so will have to be created in the format of the below

          /* ./.ftppass 
            {
              "key1": {
                "username": "<~ username ~>",
                "password": "<~ password ~>"
              }
            }
          */

        },
        src: '<%= config.dist %>',
        dest: '<~ Project root on server ~>',
        exclusions: [
          '<%= config.dist %>/**/.DS_Store'
        ],
        serverSep: '/',
        concurrency: 4,
        progress: true
      }
    },

  	watch: {

  		js: {
  			// files: ['<%= config.app %><% config.jsfolder %>/{,*/}*.js'],
        files: ['<%= config.app %><% config.jsfolder %>/**/*.js'],
  			tasks: ['browserify:server', 'jshint'],
  			options: {
  				livereload: true
  			}
  		},

  		sass: {
  			// files: ['<%= config.app %><% config.sassfolder %>/{,*/}*.{scss,sass}'],
  			files: ['<%= config.app %>/styles/**/*.{scss,sass}'],
  			tasks: ['sass:server']
  		},

  		css: {
        files: ['<%= config.app %><% config.cssfolder %>/**/*.css'],
  			// files: ['<%= config.app %>/styles/**/*.css'],
  			options: {
  				livereload: true
  			}
  		},

  		gruntfile: {
  			files: ['gruntfile.js']
  		},

      hbs: {
        files: [
          '<%= config.app %>/js/modules/**/*.hbs',
        ],
        tasks: ['handlebars']
      },

  		livereload: {
  			options: {
  				livereload: '<%= connect.options.livereload %>'
  			},
  			files: [
  				'<%= config.app %>/{,*/}*.html',
	        '.tmp/styles/{,*/}*.css',
	        '<%= config.app %>/images/{,*/}*'
  			]
  		}
  	}, // watch end

  	connect: {
  		options: {
  			port: 9000,
  			open: true,
  			livereload: 35729,
  			base: 'app',
  			hostname: 'localhost'
  		},
      livereload: {
        options: {
        }
      },
  		dist: {
  			options: {
  				base: '<%= config.dist %>',
  				livereload: false
  			}
  		}

  	}, // end connect (server)

  	// Empties folders to start fresh
	  clean: {
	    dist: {
        options: {
          force: true
        },
	      files: [{
	        dot: true,
	        src: [
	          '.tmp',
	          '<%= config.dist %>/*',
	          '!<%= config.dist %>/.git*'
	        ]
	      }]
	    },
	    server: '.tmp'
	  },

  	jshint: {
  		options: {
  			jshintrc: '.jshintrc',
  			reporter: require('jshint-stylish')
  		},
  		all: [
  			'gruntfile.js',
  			'<%= config.app %>/js/**/*.js',
        '<%= config.app %>/js/{,*/}*.js',
        '!<%= config.app %>/js/vendor/**/*.*',
        '!<%= config.app %>/js/modules/**/templates/*.*',
        '!<%= config.app %>/js/modules/**/templates/**/*.*',
        '!<%= config.app %>/js/bundle.js',
        '!<%= config.app %>/js/modules/blog/blog-post-stubs.js',
        '!<%= config.app %>/js/modules/projects/projects-stubs.js'
  		]
  	}, 
  	// lint end

  	sass: {
  		dist: {
        options: {
          sourcemap: 'none'
        },
  			files: [{
  				expand: true,
  				cwd: '<%= config.app %><%= config.sassfolder %>',
  				src: ['*.{scss,sass}'],
  				dest: '.tmp/styles',
  				ext: '.css'
  			}]
  		},
  		server: {
  			files: [{
  				expand: true,
          cwd: '<%= config.app %><%= config.sassfolder %>',
  				src: ['{,*/}*.{scss,sass}'],
  				dest: '<%= config.app %><%= config.cssfolder %>',
  				ext: '.css'
  			}]
  		},
  		export: {
        options: {
          sourcemap: 'none'
        },
  			files: [{
  				expand: true,
  				cwd: '<%= config.app %><%= config.sassfolder %>',
  				src: ['*.{scss,sass}'],
  				dest: '<%= config.dist %><%= config.cssfolder %>',
  				ext: '.css'
  			}]
  		}
  	}, // sass end

    handlebars: {
        modules: {
          options: {
            processName: function(filePath) {
              return filePath.replace('app/', '').replace('templates/', '').replace('modules/', '').replace('.hbs', '');
            },
            commonjs: true,
            namespace: false,
            single: true
            // wrapped: false
          },
          files: {
            'app/js/modules/contact/templates/contact.js': 'app/js/modules/contact/templates/contact.hbs',
            'app/js/modules/about/templates/about.js': 'app/js/modules/about/templates/about.hbs',
            'app/js/modules/blog/templates/blogpost.js': 'app/js/modules/blog/templates/blogpost.hbs',
            'app/js/modules/blog/templates/blogposts.js': 'app/js/modules/blog/templates/blogposts.hbs',
            'app/js/modules/ui/templates/header.js': 'app/js/modules/ui/templates/header.hbs',
            'app/js/modules/projects/templates/projects.js': 'app/js/modules/projects/templates/projects.hbs',
            'app/js/modules/projects/templates/project.js': 'app/js/modules/projects/templates/project.hbs',
            'app/js/modules/intro/templates/intro.js': 'app/js/modules/intro/templates/intro.hbs',
            'app/js/modules/intro/templates/socialwatermarks/socialwatermarks.js': 'app/js/modules/intro/templates/socialwatermarks/socialwatermarks.hbs',
            'app/js/modules/intro/templates/socialwatermarks/socialwatermark.js': 'app/js/modules/intro/templates/socialwatermarks/socialwatermark.hbs',
            'app/js/modules/intro/templates/herosvg/herosvg.js': 'app/js/modules/intro/templates/herosvg/herosvg.hbs',
            'app/js/modules/master/templates/master.js': 'app/js/modules/master/templates/master.hbs'
          }
        }
    }, // handlbars end

    shell: {
      publish: {
        command: (function(message){ 
          if (typeof message === 'undefined') {
            return 'cd ../spenuk.github.io && git add . && git commit -am "Auto build update @ '+ new Date().toLocaleString() +'" && git push -u origin master';
          } else {
            return 'cd ../spenuk.github.io && git add . && git commit -am "Auto build update: ' + message + '" && git push -u origin master';
          }
        })()
      }
    },

    copy: {
      dist: {
        files: [{
          expand: true,
          dot: true,
          cwd: '<%= config.app %>',
          dest: '<%= config.dist %>',
          src: [
            '*.{ico,png,jpg,txt}',
            'CNAME',
            '*.{eot,svg,ttf,woff,otf}',
            'index.html',
            '{,*/}*.html',
            '!html/**/*.*',
            'assets/**/*.*',
            // 'js/**/*.js',
            'js/vendor/*.js',
            'js/bundle.js',
            'styles/**/*.css',
            'styles/fonts/{,*/}*.*',
            'styles/fontawesome/fonts/{,*/}*.*'

          ]}
        ]
      }
    },

    browserify: {
      server: {
        options: {
          browserifyOptions: {
             debug: true
          }
        },
        files: {
          '<%= config.app %>/js/bundle.js': ['<%= config.app %>/js/main.js'],
        }
      },
      dist: {
        files: {
          '<%= config.dist %>/js/bundle.js': ['<%= config.app %>/js/main.js'],
        }
      }
    }

  });

	grunt.registerTask('serve', 'Start the front-end server', function(target){
  	if (target === 'dist') {
  		return grunt.task.run(['build', 'connect:dist:keepalive']);
  	}

  	grunt.task.run([
  		'clean:server',
  		'sass:server',
  		'jshint',
  		'connect:livereload',
  		'watch'
  	]);
  }); // serve task end

  grunt.registerTask('build', [
  	'clean:dist',
  	'cssmin',
  	'uglify',
  	'copy:dist'
  ]);

	grunt.registerTask('export', [
    'clean:dist',
    'sass:export',
		'copy:dist'
	]);

  grunt.registerTask('publish', [
    'export',
    'shell:publish'
  ]);

  grunt.registerTask('devpush', [
    'export',
    'sftp-deploy:dev'
  ]);

  grunt.registerTask('default', [
    'serve'
  ]);

};