/**
 * Created by Kostiantyn on 9/9/2015.
 */
define([
    'angular',
    "./customersOrders/index"
], function(ng){
    'use strict';

    return ng.module('app', [
        "app.customersOrders"
    ]);
});