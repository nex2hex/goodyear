var
	gulp = require('gulp'),
	csso = require('gulp-csso'),
	concat = require('gulp-concat'),
	livereload = require('gulp-livereload'),
	uglify = require('gulp-uglify');

gulp.task('js', function () {
	gulp.src(['./src/js/*'])
		.pipe(concat('goodyear.js'))
		.pipe(gulp.dest('./demo'))
		.pipe(livereload());
});

gulp.task('build', function () {
	gulp.src('./src/css/*')
		.pipe(concat('goodyear.css'))
		.pipe(csso())
		.pipe(gulp.dest('./demo'));

	gulp.src(['./src/js/*'])
		.pipe(concat('goodyear.js'))
		//.pipe(uglify())
		.pipe(gulp.dest('./demo'));

	gulp.src(['./src/vendor/*'])
		.pipe(concat('libs.js'))
		.pipe(uglify())
		.pipe(gulp.dest('./demo'));
});

gulp.task('watch', function () {
	livereload.listen();
	gulp.watch('src/js/*', ['js']);
});