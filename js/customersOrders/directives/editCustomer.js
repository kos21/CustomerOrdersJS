/**
 * Created by Kostiantyn on 9/11/2015.
 */
define(["../module"], function(customersOrders){

    customersOrders.directive("editCustomer", ["customerOrder", function(customerOrder){

        return {
            "restrict": "E",
            templateUrl: "./customersOrders/views/formEditCustomer.html"
        }
    }]);
});