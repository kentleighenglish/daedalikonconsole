var gulp = require('gulp'),
	concat = require('gulp-concat'),
	// uglify = require('gulp-uglify'),
	sass = require('gulp-sass'),
	cleanCss = require('gulp-clean-css'),
	plumber = require('gulp-plumber');

gulp.task('scss', function(){
	var scss = gulp.src('public/scss/bootstrap.scss')
		.pipe(plumber())
		.pipe(sass())
		.pipe(cleanCss())
		.pipe(concat('style.css'))
		.pipe(gulp.dest('./public/dist/'));
	scss.on('end', function(){
		done('SCSS');
	});
});

gulp.task('default', function(){
	gulp.watch('public/scss/*.scss', ['scss']);
});

gulp.task('compile', function(){

});

function done(msg){
	console.log('Complete '+msg);
}
