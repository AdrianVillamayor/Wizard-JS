const gulp = require('gulp');
const sourcemaps = require('gulp-sourcemaps');
const browserify = require('browserify');
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');
const uglify = require('gulp-uglify');
const minimist = require('minimist');
const dotenv = require('dotenv');
const envify = require('envify/custom');

// Load environment variables from .env file
dotenv.config({ path: './.env' });

// Parse command-line arguments to determine the environment
const options = minimist(process.argv.slice(2), {
    string: 'env',
    default: { env: 'development' }
});

const isProduction = options.env === 'production';

// Task to bundle JavaScript files using Browserify and envify
gulp.task('bundle', function () {
    let bundler = browserify({
        entries: 'src/index.js', // Entry point of the bundle
        debug: true  // Enables source map generation for easier debugging
    });

    // Transform to replace environment variables using envify
    bundler.transform(envify({
        CLIENT_ID: process.env.CLIENT_ID,
        CLIENT_SECRET: process.env.CLIENT_SECRET
    }));

    // Bundle the project and output to the dist folder
    let stream = bundler.bundle()
        .pipe(source('bundle.js')) // Convert browserify's output to a vinyl stream
        .pipe(buffer()) // Convert to a buffer to allow further streaming
        .pipe(sourcemaps.init({ loadMaps: true })) // Load the existing sourcemaps
        .pipe(isProduction ? uglify() : gulp.dest('dist')) // Minify only in production
        .pipe(sourcemaps.write('./')) // Write the final sourcemaps
        .pipe(gulp.dest('dist'));

    return stream;
});

// Watch task to automatically bundle when JavaScript files change
gulp.task('watch', function () {
    gulp.watch('src/**/*.js', gulp.series('bundle')); // Watch JS files for changes and run the bundle task
});

// Default task that runs the bundle and watch tasks
gulp.task('default', gulp.series('bundle', 'watch'));
