var gulp = require('gulp');
var tar = require('gulp-tar-path');
var gzip = require('gulp-gzip');
var a11y = require('gulp-a11y');
var audit = require('gulp-audit');
var jshint = require('gulp-jshint');
var map = require('map-stream');
var pa11y = require('gulp-pa11y');
//var runSequence = require('run-sequence');


//Gulp pa11y task
/*gulp.task('build',pa11y({
	url: 'http://localhost:8000',
	failOnError: true,
	showFailedOnly: true,
	reporter: 'console',
	phantom: {
       parameters : {
           'web-security': false
       }
	}
	}));*/
	
	
//Gulp task to audit the page using a11y

gulp.task('audit', function() {
	return gulp.src(['*.html'])
	.pipe(pa11y({
		failOnError: true,
		showFailedOnly: true,
		reporter:'console'
			}))
	.pipe(pa11y.reporter());
});

/*gulp.task('pa11y', function() {
    pa11y({ url: 'http://localhost:8000'});
});*/
/*var test = pa11y({
	url: 'http://localhost/',
	phantom: {
		parameters: {
			'web-security': false
		}
	}
});

//Gulp pa11y task
gulp.task('pa11y',pa11y({
	url: 'http://localhost/',
	failOnError: true,
	showFailedOnly: true,
	reporter: 'console',
}));*/

/*gulp.task('build',function(callback){
	runSequence('pa11y',callback);
});*/

//Gulp task to fail the build
/*var exitOnJshintError = map(function (file, cb) {
  if (!file.jshint.success) {
    console.error('jshint failed');
    process.exit(1);
  }
});

gulp.task('lint', function() {
  gulp.src('src/*.html')
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'))
    .pipe(exitOnJshintError);
});*/




//gulp.task('default',['pa11y','audit']);

//gulp task to create tar files
/*gulp.task('default', function() {
	 gulp.src(['*.html','*.js'])
	.pipe(tar('archive.tar'))
	.pipe(gzip())
	.pipe(gulp.dest('./'));
	console.log("tar file created");
});*/

//gulp.task('default',['compress']);







/*Required modulesi

var gulp = require('gulp'),
    uglify = require('gulp-uglify');
    rename = require('gulp-rename');

//Script task


gulp.task('scripts',function(){
	gulp.src(['sample/js/*.js','!sample/js/*.min.js'])
	.pipe(rename({suffix:'.min'}))
	.pipe(uglify())
	.pipe(gulp.dest('/sample/js'));
});

//Compass/Sass Tasks

gulp.task('compass',function(){
	gulp.src('style.css')
	.pipe(compass
	.pipe(gulp.dest('

//Watch task:- avoids typing gulp

gulp.task('watch',function(){
	gulp.watch('sample/js/*.js',['scripts']);
});

//Default task-that calls other tasks

gulp.task('default',['scripts','watch']);*/
