module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
      sprite: {
          all: {
              src: 'images/sprite_all/*.png',
              dest: 'images/sprite-all.png',
              destCss: 'sass/sprite_all.scss',
              algorithm: 'top-down',
              padding: 0,
              cssFormat: 'css',
              imgOpts: {
                  'format': 'png',
                  'quality': 100
              },
              cssOpts: {
                  cssSelector: function (item) {
                      return '.iconks-' + item.name;
                  }
              },
              cssVarMap: function(sprite) {
                  //sprite.name = '' + sprite.name
                  //sprite.name = sprite.name.replace('icon-', 'icon777');
              }
          }
      },
      compass: {
      dist: {
        options: {
          sassDir: 'sass',
          cssDir: 'css',
		  //imagesDir:'images',
//		  fontsDir:'fonts',
		  outputStyle:'expanded', /*nested, expanded, compact, compressed.*/
		  noLineComments:true
        }
      }
    },
    watch: {
        sprite: {
            files: ['images/sprite_all/*.{png,jpg,gif}'],
            tasks: ['sprite:all']
            /*options: {
                event: ['added']
            }*/
        },
      css: {
        files: '**/*.scss',
        tasks: ['compass', 'autoprefixer'],
        options: {
          spawn: false,
          livereload: true
        }
      },
      js: {
        files: 'js/*.js',
        options: {
          spawn: false,
          livereload: true
        }
      },
      tpl: {
        files: 'tpl/*.html',
        options: {
          spawn: false,
          livereload: true
        }
      }
    },
    connect: {
      server: {
        options: {
          livereload: true
        }
      }
    },
    autoprefixer: {
      options: {
        browsers: ["last 2 version", "> 1%", "ie 8", "ie 9"],
		src: "css/style.css",
        dest: "css/style.css"
      }
    },
//	csscomb: {
//        dist: {
//            files: {
//                "css/main.css": ["css/main.css"]
//            }
//        }
//    },
	/*csso: {
	  compress: {
		options: {
		  report: 'gzip'
		},
		files: {
		  'style.css': ['style.css']
		}
	  },
	  restructure: {
		options: {
		  restructure: false,
		  report: 'min'
		},
		files: {
		  'style.css': ['style.css']
		}
	  }
	},*/
    imagemin: {
      dynamic: {
        files: [{
          expand: true,
          cwd: 'images',
          src: ['**/*.{png,jpg,gif}'],
          dest: 'images'
        }]
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-autoprefixer');
  //grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-csscomb');
  /*grunt.loadNpmTasks('grunt-csso');*/
  grunt.loadNpmTasks('grunt-spritesmith');

  grunt.registerTask('default',  [ 'sprite' ,'compass', /*'imagemin',*/ 'connect', /*'csscomb', 'csso',*/ 'watch']);

};
