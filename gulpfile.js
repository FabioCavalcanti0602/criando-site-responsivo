var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var watch  = require('gulp-watch');

// SASS Arquivo
var arquivoSass = './sass/**/*.sass';
// CSS Arquivo
var destinoCss  = 'css';

// CSS para desenvolvimento
var sassDesOpcao = {outputStyle:'expanded'};

// CSS para produção
var sassProdOpcao = {outputStyle:'compressed'};


// task para o sass para desenvolvimento
gulp.task('sassdes', function(){

   return gulp.src(arquivoSass)
          .pipe(sass(sassDesOpcao).on('error',sass.logError))
          .pipe(gulp.dest(destinoCss));

});

// task para o sass finalizado
gulp.task('sassprod', function(){

   return gulp.src(arquivoSass)
          .pipe(sass(sassProdOpcao).on('error',sass.logError))
          .pipe(rename('style.min.css'))
          .pipe(gulp.dest(destinoCss));

});

// task para o watch
gulp.task('watchDes', function(){

    gulp.watch(arquivoSass, ['sassdes']);

});


// tash default
gulp.task('default', ['sassdes', 'sassprod']);