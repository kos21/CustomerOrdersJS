/**
 * Created by Kostiantyn on 9/11/2015.
 */
define(["../module"], function(customersOrders){

    customersOrders.directive("listOrders", [function(){

        return{
            "restrict": "E",
            "templateUrl": configApp.templates.list_orders
        }
    }]);
});