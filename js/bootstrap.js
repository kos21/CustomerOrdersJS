/**
 * Created by Kostiantyn on 9/9/2015.
 */
define([
    "require",
    "angular",
    "configApp",
    "testProvider",
    "app"
], function(require, ng, configApp, testProvider){
    'use strict';

    require(["domReady!"], function(document){

        ng.bootstrap(document, ['app']);
    });
});