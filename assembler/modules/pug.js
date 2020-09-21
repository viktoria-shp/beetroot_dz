const gulp = require('gulp'),
galp_pug = require('gulp-pug'),
$ = require('gulp-load-plugins')(),
{ path, task } = require('./vars').vars;

const pug = () => {
	return gulp.src(path.src.pug)
	.pipe(galp_pug({pretty: '\t'}))
	.pipe(gulp.dest(path.app.pug));
}
module.exports = pug;