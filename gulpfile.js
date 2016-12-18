var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps');
var connect = require('gulp-connect');
var browserSync = require('browser-sync').create();
var sftp = require('gulp-sftp');
// var SECRETS = require('./secrets');

var sassOptions = {
  errLogToConsole: true,
  outputStye: 'expanded'
};

var sassSources = './scss/**/*.scss';
var sassOutput = './app/css';
var htmlSource = './app/**/*.html';

gulp.task('sass', function (){
  // console.log('testing 1 2 3')
  return gulp.src(sassSources)
    .pipe(sourcemaps.init())
    .pipe(sass(sassOptions).on('error', sass.logError))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(sassOutput))
    .pipe(browserSync.stream());
});

gulp.task('sassprod', function() {
  return gulp.src(sassSources)
    .pipe(sass())
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(gulp.dest(sassOutput))
    .pipe(connect.reload());
});

gulp.task('serveprod', ['sassprod'], function() {
  connect.server({
    root: './app',
    port: process.env.PORT || 5000,
    livereload: false
  });
  require('./server');
});

gulp.task('serve', ['sass'], function(){

  browserSync.init({
    server: './app'
  });

  gulp.watch(sassSources, ['sass']);
  gulp.watch(htmlSource).on('change', browserSync.reload);
});


gulp.task('default', ['serve']);

// gulp.task('deploy', function(){
//   return gulp.src('./app/**/*')
//   .pipe(sftp({
//     host: 'oit2.scps.nyu.edu',
//     user: SECRETS.user,
//     pass: SECRETS.pass,
//     remotePath: '/home/c/capshawj/web'
//   }));
// });

gulp.task('default', ['serve']);
