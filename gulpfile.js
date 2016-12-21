
var gulp         = require('gulp'),
		stylus         = require('gulp-stylus'),

		browserSync  = require('browser-sync').create();


gulp.task('styles', function () {
	return gulp.src('css/*.styl')
	.pipe(stylus())
	.pipe(gulp.dest('css/'))
	.pipe(browserSync.stream());
});



gulp.task('watch', ['styles'], function () {

	browserSync.init({
		open: true,
		server: {
			baseDir: "./"
		},
		notify: true
	});


	gulp.watch('css/**/*.styl', ['styles']);
	gulp.watch('js/*.js').on('change', browserSync.reload);
	gulp.watch('*.html').on('change', browserSync.reload);

});

gulp.task('default', ['watch']);
