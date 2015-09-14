/**
 * Created by Kostiantyn on 9/9/2015.
 */
define([
    "require",
    "angular",
    "testProvider",
    "app"
], function(require, ng,  testProvider){
    'use strict';

    require(["domReady!"], function(document){

        ng.bootstrap(document, ['app']);
    });
});