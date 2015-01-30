'use strict';

module.exports = function (grunt) {

	// Time how long tasks take. Can help when optimizing build times
	require('time-grunt')(grunt);

	grunt.loadNpmTasks('grunt-contrib-requirejs');

	// Load grunt tasks automatically 
	require('load-grunt-tasks')(grunt);

	// Configurable paths
  var config = {
    app: 'app',
    dist: '../spenuk.github.io',
    build: 'build.js'
  };

	grunt.initConfig({

		// Configurable paths
		config: {
		  app: config.app,
		  dist: config.dist,
		  buildjs: config.build
		  
		}, // config end

		watch: {
			bower: {
        files: ['bower.json']
        // ,// tasks: ['wiredep']
      },
			js: {
				files: [
				'<%= config.app %>/scripts/{,*/}*.js',
				'<%= config.app %>/scripts/**/*.js'
			],
				tasks: ['jshint'],
				options: {
					livereload: true
				}
			},
			sass: {
        files: ['<%= config.app %>/styles/{,*/}*.{scss,sass}'],
        tasks: ['sass:server', 'autoprefixer']
      },

      styles: {
        files: ['<%= config.app %>/styles/{,*/}*.css'],
        tasks: ['newer:copy:styles', 'autoprefixer']
      },

			gruntfile: {
	      files: ['Gruntfile.js']
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
	    },

	    hbs: {
	      files: ['<%= config.app %>/scripts/{,*/}*.hbs'],
	      tasks: ['handlebars', 'concat:templates']
	    }
		}, // watch end

	  // Grunt server settings
	  connect: {
	    options: {
	      port: 9000,
	      open: true,
	      livereload: 35729,
	      // base: '../spenuks.github.io/',
	      // Change this to '0.0.0.0' to access the server from outside
	      hostname: 'localhost'
	    },
	    livereload: {
        options: {
          middleware: function(connect) {
            return [
              connect.static('.tmp'),
              connect().use('/bower_components', connect.static('./bower_components')),
              connect.static(config.app)
            ];
          }
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

	  // Make sure code styles are up to par and there are no obvious mistakes
	  jshint: {
	    options: {
	      jshintrc: '.jshintrc',
	      reporter: require('jshint-stylish')
	    },
	    all: [
	      'Gruntfile.js',
	      '<%= config.app %>/scripts/{,*/}*.js',
	      '<%= config.app %>/scripts/**/*.js',
	      '!<%= config.app %>/scripts/vendor/*',
	      '!<%= config.app %>/scripts/almond.js',
	      '!<%= config.app %>/scripts/templates.js',
	      '!<%= config.app %>/scripts/templates/templates.js',
	      '!<%= config.app %>/scripts/shared/transitTemp.js',
	      '!<%= config.app %>/scripts/modules/wordpress/wpStubs.js',
	      'test/spec/{,*/}*.js'
	    ]
	  },

	  // Compiles Sass to CSS and generates necessary files if requested
	  sass: {
	    options: {
	      loadPath: 'bower_components'
	    },
	    dist: {
	      files: [{
	        expand: true,
	        cwd: '<%= config.app %>/styles',
	        src: ['*.{scss,sass}'],
	        dest: '.tmp/styles',
	        ext: '.css'
	      }]
	    },
	    server: {
	      files: [{
	        expand: true,
	        cwd: '<%= config.app %>/styles',
	        src: ['*.{scss,sass}'],
	        dest: '.tmp/styles',
	        ext: '.css'
	      }]
	    },
	    export: {
	    	files: [{
	        expand: true,
	        cwd: '<%= config.app %>/styles',
	        src: ['*.{scss,sass}'],
	        dest: '<%= config.dist %>/styles',
	        ext: '.css'
	      }]
	    }
	  },

	  // Add vendor prefixed styles
	  autoprefixer: {
	    options: {
	      browsers: ['> 1%', 'last 2 versions', 'Firefox ESR', 'Opera 12.1']
	    },
	    dist: {
	      files: [{
	        expand: true,
	        cwd: '.tmp/styles/',
	        src: '{,*/}*.css',
	        dest: '.tmp/styles/'
	      }]
	    }
	  },

	  concat: {
	  	templates: {
	  		files: {
	        '<%= config.app %>/scripts/templates.js': ['<%= config.app %>/scripts/templates/templates.js'],
	      },
        options: {
		      banner: ';require([\'handlebars\'], function(Handlebars) { \n',
		      footer: '});'
		    }
			  // dist: {
			  //   src: ['<%= config.app %>/scripts/templates/templates.js'],
			  //   dest: '<%= config.app %>/scripts/templates.js',
			    
			  // }
			}
		},

	  // Renames files for browser caching purposes
		  // rev: {
		  //   dist: {
		  //     files: {
		  //       src: [
		  //         '<%= config.dist %>/scripts/{,*/}*.js',
		  //         '<%= config.dist %>/styles/{,*/}*.css',
		  //         '<%= config.dist %>/assets/images/{,*/}*.*',
		  //         '<%= config.dist %>/styles/fonts/{,*/}*.*',
		  //         '<%= config.dist %>/*.{ico,png}'
		  //       ]
		  //     }
		  //   }
		  // },

		  // Reads HTML for usemin blocks to enable smart builds that automatically
		  // concat, minify and revision files. Creates configurations in memory so
		  // additional tasks can operate on them
		  // useminPrepare: {
		  //   options: {
		  //     dest: '<%= config.dist %>'
		  //   },
		  //   html: '<%= config.app %>/index.html'
		  // },

		  // Performs rewrites based on rev and the useminPrepare configuration
		  // usemin: {
		  //   options: {
		  //     assetsDirs: ['<%= config.dist %>', '<%= config.dist %>/images']
		  //   },
		  //   html: ['<%= config.dist %>/{,*/}*.html'],
		  //   css: ['<%= config.dist %>/styles/{,*/}*.css']
		  // },

		  // The following *-min tasks produce minified files in the dist folder
		  // imagemin: {
		  //   dist: {
		  //     files: [{
		  //       expand: true,
		  //       cwd: '<%= config.app %>/images',
		  //       src: '{,*/}*.{gif,jpeg,jpg,png}',
		  //       dest: '<%= config.dist %>/images'
		  //     }]
		  //   }
		  // },

		  // svgmin: {
		  //   dist: {
		  //     files: [{
		  //       expand: true,
		  //       cwd: '<%= config.app %>/images',
		  //       src: '{,*/}*.svg',
		  //       dest: '<%= config.dist %>/images'
		  //     }]
		  //   }
		  // },

		  // htmlmin: {
		  //   dist: {
		  //     options: {
		  //       collapseBooleanAttributes: true,
		  //       collapseWhitespace: true,
		  //       conservativeCollapse: true,
		  //       removeAttributeQuotes: true,
		  //       removeCommentsFromCDATA: true,
		  //       removeEmptyAttributes: true,
		  //       removeOptionalTags: true,
		  //       removeRedundantAttributes: true,
		  //       useShortDoctype: true
		  //     },
		  //     files: [{
		  //       expand: true,
		  //       cwd: '<%= config.dist %>',
		  //       src: '{,*/}*.html',
		  //       dest: '<%= config.dist %>'
		  //     }]
		  //   }
	  // },

	  shell: {
	  	buildjs: {
	  		command: 'r.js -o <%= config.buildjs %>'
	  	},
	  	pushBuilt: {
	  		command: (function(message){ 
					  				if (typeof message === 'undefined') {
					  					return 'cd ../spenuk.github.io && git add . && git commit -am "Auto build update @ '+ new Date().toLocaleString() +'" && git push -u origin master';
					  				} else {
					  					return 'cd ../spenuk.github.io && git add . && git commit -am "Auto build update: ' + message + '" && git push -u origin master';
					  				}
									})()
	    }
	  },


    handlebars: {
		    all: {
		    	options: {
		    		processName: function(filePath) {
		        	return filePath.replace('app/scripts/', '').replace('templates/', '').replace('modules/', '').replace('.hbs', '');
		    		},
		    		// wrapped: false
		    	},
		      files: {
		        'app/scripts/templates/templates.js': ['app/scripts/modules/**/*.hbs']
		      } 
		    }
		},

	  replace: {
		  require: {
		    src: ['<%= config.app %>/*.html'],             // source files array (supports minimatch)
		    dest: '<%= config.dist %>/',             // destination directory or file
		    replacements: [{
		      from: 'bower_components/requirejs/require.js" data-main="scripts/', // string replacement
		      to: ''
		    }, {
		      from: '<link rel="stylesheet" href="bower_components/fontawesome/css/font-awesome.css" />',
		      to: ''
		    // }, {
		    //   from: 'Foo',
		    //   to: function (matchedWord) {   // callback replacement
		    //     return matchedWord + ' Bar';
		      // }
		    }]
		  },
		  // fontawesome: {
		  // 	src: '<%= config.dist %>/styles/',
		  //   dest: '<%= config.dist %>/styles/',
		  //   replacements: [{
		  //   	from: ,
		  //   	to: 
		  //   }]
		  // }
		},


	  // Copies remaining files to places other tasks can use
	  copy: {
	    dist: {
	      files: [{
	        expand: true,
	        dot: true,
	        cwd: '<%= config.app %>',
	        dest: '<%= config.dist %>',
	        src: [
	          '*.{ico,png,txt}',
	          'images/{,*/}*.webp',
	          '{,*/}*.html',
	          'styles/fonts/{,*/}*.*',
	          'bower_components/fontawesome/fonts/fontawesome-webfont.ttf'
	        ]
	      }, {
	        src: [
	        	'bower_components/fontawesome/fonts/fontawesome-webfont.ttf'
	        ],
	        dest: '<%= config.dist %>/fonts/fontawesome-webfont.ttf'
	      },{
	        src: 'node_modules/apache-server-configs/dist/.htaccess',
	        dest: '<%= config.dist %>/.htaccess'
	      }, {
	      	expand: true,
	      	cwd: '<%= config.app %>/fonts',
	        // src: '**/*.*',
	        src: ['*.ttf'],
	        dest: '<%= config.dist %>/fonts/'
	      }]
	    },
	    // fontawesome: {
	    // 	files: [{
	    // 		cwd: 'bower_components/fontawesome.js',
	    //     dest: '<%= config.dist %>',
	    // 	}]
	    // },
	    styles: {
	      expand: true,
	      dot: true,
	      cwd: '<%= config.app %>/styles',
	      dest: '.tmp/styles/',
	      src: '{,*/}*.css'
	    }
	  },

	  // Generates a custom Modernizr build that includes only the tests you
	  // reference in your app
	  modernizr: {
	    dist: {
	      devFile: 'bower_components/modernizr/modernizr.js',
	      outputFile: '<%= config.dist %>/scripts/vendor/modernizr.js',
	      files: {
	        src: [
	          '<%= config.dist %>/scripts/{,*/}*.js',
	          '<%= config.dist %>/styles/{,*/}*.css',
	          '!<%= config.dist %>/scripts/vendor/*'
	        ]
	      },
	      uglify: true
	    }
	  },

	  // Run some tasks in parallel to speed up build process
	  concurrent: {
	    server: [
	      'sass:server',
	      'copy:styles'
	    ],
	    test: [
	      'copy:styles'
	    ],
	    dist: [
	      'sass',
	      'copy:styles',
	      'imagemin',
	      'svgmin'
	    ]
	  }

	});

	grunt.registerTask('serve', 'start the server and preview your app, --allow-remote for remote access', function (target) {
	  if (grunt.option('allow-remote')) {
	    grunt.config.set('connect.options.hostname', '0.0.0.0');
	  }
	  if (target === 'dist') {
	    return grunt.task.run(['build', 'connect:dist:keepalive']);
	  }

	  grunt.task.run([
	    'clean:server',
	    // 'wiredep',
	    // 'jshint:all',
	    'handlebars',
			'concat:templates',
	    'concurrent:server',
	    'autoprefixer',
	    'connect:livereload',
	    'watch'
	  ]);
	});

	grunt.registerTask('build', [
	  'clean:dist',
	  // 'wiredep',
	  // 'useminPrepare',
	  'concurrent:dist',
	  'autoprefixer',
	  'concat',
	  'cssmin',
	  'uglify',
	  'copy:dist',
	  'modernizr',
	  // 'rev',
	  // 'usemin',
	  // 'htmlmin'
	]);

	grunt.registerTask('default', [
		'handlebars'
	]);

	grunt.registerTask('pushBuilt', [
		'shell:pushBuilt'
	]);

	grunt.registerTask('export', [
		'copy:dist',
		'handlebars',
		'concat:templates',
		'sass:export',
	  'shell:buildjs',
	  'replace:require'
	]);

};

