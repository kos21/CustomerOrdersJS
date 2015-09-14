/**
 * Created by Kostiantyn on 9/11/2015.
 */
define(["../module"], function(customersOrders){

    customersOrders.directive("addCustomer", [function(){

        return {
            "restrict": "E",
            templateUrl: "./customersOrders/views/formAddCustomer.html"
        };
    }]);
});