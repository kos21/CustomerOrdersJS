/**
 * Created by Kostiantyn on 9/9/2015.
 */
define(["../module"], function(customersOrders){

    customersOrders.directive("listCustomers", ["customerOrder", function(customerOrder){

        return{
            "restrict": "E",
            link: {
              pre: function preLink(scope, element, attrs){
                      customerOrder.getlistCustomers(function(customers){
                          scope.list_customers = customers;
                      });
              }
            },
            templateUrl: "./customersOrders/views/listCustomers.html"
        };
    }]);
});