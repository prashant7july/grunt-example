//http://stackoverflow.com/questions/22539733/running-multiple-grunt-tasks-of-the-same-task-type?noredirect=1&lq=1
module.exports = function(grunt) {

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
        }        
    });

    // 3. Where we tell Grunt we plan to use this plug-in.
    grunt.loadNpmTasks('grunt-contrib-concat');

    // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
    grunt.registerTask('dist', ['concat:dist1', 'concat:dist2']);


};