const { parallel, watch, dest, src } = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const browserSync = require("browser-sync").create();

function build() {
  return src("./assets/scss/**/*.scss")
    .pipe(sass({ outputStyle: "expanded" }).on("error", sass.logError))
    .pipe(browserSync.stream())
    .pipe(dest("./css/"));
}
function Watchtast() {
  browserSync.init({
    watch: true,
    localOnly: true,
    ui: false,
    server: {
      baseDir: "./",
      serveStaticOptions: {
        extensions: ["html"],
      },

      index: "plub.html",
    },
    notify: false,
  });
  watch("./assets/scss/**/*.scss", build);
  watch("*.html").on("change", browserSync.reload);
}

exports.default = parallel(build, Watchtast);
