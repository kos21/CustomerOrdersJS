/**
 * Created by Kostiantyn on 9/14/2015.
 */
var gulp  = require("gulp");
var config = require("./config");
var argv = require("yargs").argv;
var exec = require("child_process").exec;

gulp.task("copy", function(){
    gulp.src(config.pathData.root_source + "app.js")
        .pipe(gulp.dest(config.pathData.root_dest + "web/customerOrder"));
    gulp.src(config.pathData.root_source + "main.js")
        .pipe(gulp.dest(config.pathData.root_dest + "web/customerOrder"));
    gulp.src(config.pathData.root_source + "testProvider.js")
        .pipe(gulp.dest(config.pathData.root_dest + "web/customerOrder"));
    gulp.src(config.pathData.root_source + "bootstrap.js")
        .pipe(gulp.dest(config.pathData.root_dest + "web/customerOrder"));
    gulp.src(config.pathData.root_source + "configApp.js")
        .pipe(gulp.dest(config.pathData.root_dest + "web/customerOrder"));

    gulp.src(config.pathData.root_source + "css/**")
        .pipe(gulp.dest(config.pathData.root_dest + "web/customerOrder/css"));



    gulp.src(config.pathData.root_source + "customersOrders/**")
        .pipe(gulp.dest(config.pathData.root_dest + "web/customerOrder/customersOrders"));

    gulp.src(config.pathData.root_source + "bower_components/**")
        .pipe(gulp.dest(config.pathData.root_dest + "web/customerOrder/bower_components"));
});

gulp.task("rjs", function(cb){
    var env = argv.env == undefined ? argv.env : "dev";
        cmd = [
            "php " +  config.pathData.root_dest + "app/console cache:clear --env=" + env,
            "php " +  config.pathData.root_dest + "app/console assetic:dump --env=" + env
        ];

    exec(cmd.join(" && "), function(err, stdout, stderr){
        console.log(stdout);
        console.log(stderr);
        cb(err);
    });
    }
);

gulp.task("build", [ "copy", "rjs" ]);
gulp.task("default", [ "build" ]);

gulp.start("build");