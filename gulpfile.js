var gulp         = require('gulp');
var gulpRename   = require('gulp-rename');
var gulpTemplate = require('gulp-template');
var path         = require('path');
var yargs        = require('yargs');

gulp.task('component', () => {
    var cap = function (val) {
        return val.charAt(0).toUpperCase() + val.slice(1);
    };

    const name = yargs.argv.name;
    const parentPath = yargs.argv.parent || '';
    var sources = path.join(__dirname, 'generator', 'component/**/*.**');
    if (yargs.argv.noservice) {
        sources = path.join(__dirname, 'generator', 'component-noservice/**/*.**');
    }
    const destPath = path.join('app', parentPath, name);

    return gulp.src(sources)
        .pipe(gulpTemplate({
            name: name,
            upCaseName: cap(name)
        }))
        .pipe(gulpRename((path) => {
            path.basename = path.basename.replace('temp', name);
        }))
        .pipe(gulp.dest(destPath));
});
