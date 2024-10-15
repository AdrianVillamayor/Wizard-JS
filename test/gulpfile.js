const gulp = require('gulp');
const sourcemaps = require('gulp-sourcemaps');
const browserify = require('browserify');
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');
const uglify = require('gulp-uglify');
const minimist = require('minimist');
const dotenv = require('dotenv');
const envify = require('envify/custom');
const babelify = require('babelify');


dotenv.config({ path: './.env' });


const options = minimist(process.argv.slice(2), {
    string: 'env',
    default: { env: 'development' }
});

const isProduction = options.env === 'production';


gulp.task('bundle', function () {
    let bundler = browserify({
        entries: 'src/index.js',
        debug: true,
        transform: [
            babelify.configure({
                presets: ['@babel/preset-env'],
                sourceMaps: true
            }),
            envify({
                CLIENT_ID: process.env.CLIENT_ID,
                CLIENT_SECRET: process.env.CLIENT_SECRET
            })
        ]
    });

    let stream = bundler.bundle()
        .pipe(source('bundle.js'))
        .pipe(buffer())
        .pipe(sourcemaps.init({ loadMaps: true }))
        .pipe(isProduction ? uglify() : gulp.dest('dist'))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('dist'));

    return stream;
});

gulp.task('watch', function () {
    gulp.watch('src/**/*.js', gulp.series('bundle'));
});

gulp.task('default', gulp.series('bundle', 'watch'));
