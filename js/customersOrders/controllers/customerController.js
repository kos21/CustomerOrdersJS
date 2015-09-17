/**
 * Created by Kostiantyn on 9/9/2015.
 */
define(["../module"], function (customersOrders) {
    'use strict';

    customersOrders.controller("customerController", ["$scope", "customerOrder", function ($scope, customerOrder) {

        $scope.showForm = true;
        $scope.showEditCustomerForm = true;
        $scope.customer = {};
        $scope.order = {};

        /**
         * Show create customer form
         */
        $scope.showCreateCustomer = function () {
            $scope.showForm = true;
        };

        /**
         * Show edit customer form
         */
        $scope.showEditCustomer = function (customerId) {
            customerOrder.getlistOrders(customerId, function (resultData) {
                $scope.list_orders = resultData;

                customerOrder.getCustomerData(customerId, function (customerData) {

                    angular.forEach(customerData[0], function (value, key) {

                        document.querySelector("div.form_customer_edit input[name=" + key + "]").value = value;
                    });

                    $scope.showForm = false;
                });
            });
        };

        $scope.editCustomerAction = function () {
            var customerinfo = {};

            customerinfo.name = document.querySelector("div.form_customer_edit input[name=name").value;
            customerinfo.phone = document.querySelector("div.form_customer_edit input[name=phone").value;
            customerinfo.address = document.querySelector("div.form_customer_edit input[name=address").value;
            customerinfo.customerId = document.querySelector("div.form_customer_edit input[name=customerId").value;

            customerOrder.editCustomer(customerinfo);
        };

        /**
         * Add customer action
         */
        $scope.addCustomerAction = function () {
            customerOrder.sendDataCustomer($scope.customer);

            $scope.customer = {};
        };

        $scope.addOrder = function () {

            $scope.order.customerId = document.querySelector("div.form_customer_edit input[name=customerId]").value;

            customerOrder.addOrderData($scope.order);

            $scope.order = {};
        };
        $scope.deleteCustomerAction = function (customerId) {

            customerOrder.deleteCustomer(customerId);
        }
    }]);
});