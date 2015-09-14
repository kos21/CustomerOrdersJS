/**
 * Created by Kostiantyn on 9/9/2015.
 */
define(["../module"], function(customersOrders){
    'use strict';

    customersOrders.controller("customerController", ["$scope", "customerOrder", function($scope, customerOrder){

        $scope.showForm = true;
        $scope.showEditCustomerForm = true;
        $scope.customer = {};
        $scope.order = {};

        /**
         * Show create customer form
         */
        $scope.showCreateCustomer = function(){
            $scope.showForm = true;
        };

        /**
         * Show edit customer form
         */
        $scope.showEditCustomer = function(customerId){
            customerOrder.getlistOrders(customerId, function(resultData){
                $scope.list_orders = resultData;
            });

            customerOrder.getCustomerData(customerId, function(customerData){
                $scope.customerData = customerData;
            });

            $scope.showForm = false;
        };

        /**
         * Add customer action
         */
        $scope.addCustomerAction = function(){
            customerOrder.sendDataCustomer($scope.customer);

            $scope.customer = {};
        };

        $scope.addOrder = function(customerID){

            $scope.order.customerId = customerID;

            customerOrder.addOrderData($scope.order);

            $scope.order = {};
        };
    }]);
});