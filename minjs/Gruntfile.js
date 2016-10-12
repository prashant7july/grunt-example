module.exports = function(grunt) {

    /*
    // 1. All configuration goes here 
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            css: {
                src: ['archive/trunk_archived_16_06/Grouptree.UI.Web/UI.core/assets/css/*.css'],
                dest: 'archive/trunk_archived_16_06/Grouptree.UI.Web/UI.core/assets/css/production.css'
            },
            js: {
                src: ['archive/trunk_archived_16_06/Grouptree.UI.Web/UI.core/assets/js/*.js'],
                dest: 'archive/trunk_archived_16_06/Grouptree.UI.Web/UI.core/assets/js/production.js'
            }
        },
        cssmin: {
            css: {
                src: 'archive/trunk_archived_16_06/Grouptree.UI.Web/UI.core/assets/css/production.css',
                dest: 'archive/trunk_archived_16_06/Grouptree.UI.Web/UI.core/assets/css/min/production.min.css'
            }
        },
        uglify: {
            js: {
                src: 'archive/trunk_archived_16_06/Grouptree.UI.Web/UI.core/assets/js/production.js',
                dest: 'archive/trunk_archived_16_06/Grouptree.UI.Web/UI.core/assets/js/min/production.min.js'
            }
        },
        watch: {
            css: {
                files: ['archive/trunk_archived_16_06/Grouptree.UI.Web/UI.core/assets/css/*.css'],
                tasks: ['concat:css', 'cssmin:css']
            },
            js: {
                files: ['archive/trunk_archived_16_06/Grouptree.UI.Web/UI.core/assets/js/*.js'],
                tasks: ['concat:js', 'uglify:js']
            }
        }
    });

    // 2. Where we tell Grunt we plan to use this plug-in.
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // 3. Where we tell Grunt what to do when we type "grunt" into the terminal.
    grunt.registerTask('default', ['concat', 'cssmin', 'uglify']);
    */

    // 1. All configuration goes here 
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        concat: {
            dist1: {
                src: [
                    'js/foo1/bar1.js',
                    'js/foo1/bar2.js'
                ],
                dest: 'js/production/foo1.js'
            },
            dist2: {
                src: [
                    'js/foo2/bar1.js',
                    'js/foo2/bar2.js'
                ],
                dest: 'js/production/foo2.js'
            }
        }, 
        cssmin: {
            css: {
                src: 'css/common.css',
                dest: 'css/common.min.css'
            }
        },
        // configure uglify to minify js files -------------------------------------
        uglify: {
            js: {
                src: 'js/foo1/bar1.js',
                dest: 'js/production/bar1.min.js'
            }
        },  
        
    });

    // 3. Where we tell Grunt we plan to use this plug-in.
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-cssmin'); //npm install grunt-contrib-cssmin --save-dev
    grunt.loadNpmTasks('grunt-contrib-uglify'); //npm install grunt-contrib-uglify --save-dev

    // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
    grunt.registerTask('default', ['concat', 'cssmin', 'uglify']);

};