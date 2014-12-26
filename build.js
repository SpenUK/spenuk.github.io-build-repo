({
    baseUrl : "app/scripts/",
    // mainConfigFile: 'app/scripts/config.js',
    // name: "almond",
    // include: "main",
    out: "../spenuk.github.io/main.js",
    removeCombined: true,
    paths: {
        'jquery': '../../bower_components/jquery/dist/jquery',
        'underscore': '../../bower_components/underscore-amd/underscore',
        'backbone': '../../bower_components/backbone-amd/backbone',
        'handlebars': '../../bower_components/handlebars/handlebars',
        'templates': 'templates'
    },
    include: ["almond","main"]
})
