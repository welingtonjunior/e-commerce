const gulp = require('gulp')
const concat = require('gulp-concat')
const cssmin = require('gulp-cssmin')
const rename = require('gulp-rename')
const uglify = require('gulp-uglify')
const image = require('gulp-imagemin')


function tarefasCSS(cb) {

    gulp.src([
            './node_modules/bootstrap/dist/css/bootstrap.min.css',
            './node_modules/@fortawesome/fontawesome-free/css/fontawesome.min.css',
            './vendor/owl/dist/assets/owl.carousel.min.css',
            './vendor/jquery-ui/jquery-ui.min.css'
        
            
        ])
                     
        .pipe(concat('styles.css'))         // mescla arquivos
        .pipe(cssmin())                     // minifica css
        .pipe(rename({ suffix: '.min'}))    // styles.min.css
        .pipe(gulp.dest('./dist/css'))      // cria arquivo em novo diretório

    cb()

}

function tarefasJS(callback){

    gulp.src([
            './node_modules/jquery/dist/jquery.min.js',
            './node_modules/bootstrap/dist/js/bootstrap.min.js',
            './vendor/owl/dist/owl.carousel.min.js',
            './vendor/jquery-mask/jquery.mask.min.js',
            './vendor/jquery-ui/jquery-ui.min.js',
            './node_modules/@fortawesome/fontawesome-free/js/fontawesome.min.js',
            './src/js/custom.js'
        ])
        .pipe(concat('scripts.js'))         // mescla arquivos
        .pipe(uglify())                     // minifica js
        .pipe(rename({ suffix: '.min'}))    // scripts.min.js
        .pipe(gulp.dest('./dist/js'))       // cria arquivo em novo diretório

    return callback()
}

function tarefasImagem(){
    
    return gulp.src('./src/images/*')
        .pipe(image({
            pngquant: true,
            optipng: false,
            zopflipng: true,
            jpegRecompress: false,
            mozjpeg: true,
            gifsicle: true,
            svgo: true,
            concurrent: 10,
            quiet: true
        }))
        .pipe(gulp.dest('./dist/images'))
}



exports.styles = tarefasCSS
exports.scripts = tarefasJS
exports.images = tarefasImagem

