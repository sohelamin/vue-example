var gulp = require('gulp');
var copy = require('gulp-copy');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
var connect = require('gulp-connect');
var browserify = require('browserify');
var vueify = require('vueify')
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');

gulp.task('css', function() {
    var stylesheets = [
        'src/**/*.css'
    ];

    gulp.src(stylesheets)
        .pipe(concat('build.css'))
        .pipe(gulp.dest('dist'))
});

gulp.task('js', function() {
    browserify({
        entries: 'src/main.js',
        debug: true
    })
    .transform(vueify)
    .bundle()
    .on('error', function (err) {
        console.log(err.toString());
        this.emit("end");
    })
    .pipe(source('build.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({ loadMaps: true }))
        .pipe(uglify())
        .on('error', function (err) {
            console.log(err.toString());
            this.emit("end");
        })
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('dist'))
    .pipe(connect.reload());
});

gulp.task('start-server', function() {
    connect.server({ port: 8081, livereload: true });
});

gulp.task('watch:js', function() {
    gulp.watch('src/**/*.*', ['js']);
});

gulp.task('compile', ['css', 'js']);
gulp.task('watch', ['compile', 'watch:js']);
gulp.task('serve', ['watch', 'start-server']);
gulp.task('default', ['compile']);