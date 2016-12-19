
var gulp         = require('gulp'),
		stylus         = require('gulp-stylus'),

		browserSync  = require('browser-sync').create();

gulp.task('browser-sync', ['styles'], function() {
		browserSync.init({
				server: {
						baseDir: ""
				},
				notify: true
		});
});

gulp.task('styles', function () {
	return gulp.src('css/*.styl')
	.pipe(stylus())
	.pipe(gulp.dest('css/'))
	.pipe(browserSync.stream());
});



gulp.task('watch', function () {
	gulp.watch('css/**/*.styl', ['styles']);
});

gulp.task('default', ['browser-sync', 'watch']);