module.exports = function(grunt) {

/*
 * install grunt global:
 * $ npm install -g grunt-cli
 *
 * install dependencies from package.json (must run in project dir!) 
 * $ npm install 
 */


  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      js: {
        src: [
          'src/scripts/file1.js', 
          'src/scripts/file2.js', 
          'src/scripts/file3.js'
          ],
        dest: 'src/scripts/concat.js'
      }
      // ,
      // css: {
      //   src: ['src/file1.css', 'src/file2.css'],
      //   dest: 'dest/concat.css'
      // }
    },
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'src/scripts/concat.js',
        dest: 'src/scripts/concat.min.js'
      }
    },
    cssmin: {
      css:{
        src: 'src/styles/main.css',
        dest: 'src/styles/main.min.css'
      }
    }
  });
  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  // Default task(s).
  grunt.registerTask('default', ['concat', 'uglify', 'cssmin']);
};

