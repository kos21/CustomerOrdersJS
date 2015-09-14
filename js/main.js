/**
 * Created by Kostiantyn on 9/9/2015.
 */
require.config({
   paths: {
       "domReady": "./bower_components/domReady/domReady",
       "angular": "./bower_components/angular/angular",
        "configApp": "./config",
        "testProvider": "./testProvider"
   },
    shim: {
        "angular": {
            exports: "angular"
        }
    },
    "deps": [ 'bootstrap' ]
});