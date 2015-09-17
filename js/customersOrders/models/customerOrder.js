/**
 * Created by Kostiantyn on 9/9/2015.
 */
define(["../module"], function(customersOrders){

    customersOrders.factory("customerOrder", ["$http", function($http){
        return {
            getlistCustomers: function(callback){

                if(testProvider.statusDebug == true){

                    callback(testProvider.list_customers);

                    return;
                }


                $http({
                    method: "GET",
                    "url": configApp.urls.list_customers,
                    headers : {'Content-Type': 'application/x-www-form-urlencoded'}

                }).success(function(dataResult, status, headers, config){

                    callback(dataResult);

                }).error(function(data, status, headers, config){

                    console.log(status + " error message  -" + data.toString());
                });
            },
            getlistOrders: function(customerID, callback){

                if(testProvider.statusDebug == true){

                    callback(testProvider.list_orders);

                    return;
                }

                $http({
                    method: "GET",
                    "url": configApp.urls.list_orders,
                    data: "customer_id=" + customerID,
                    headers : {'Content-Type': 'application/x-www-form-urlencoded'}

                }).success(function(dataResult, status, headers, config){

                    callback(dataResult);

                }).error(function(data, status, headers, config){

                    console.log(status + " error message  -" + data.toString());
                });
            },

            sendDataCustomer: function(customerData){
                if(testProvider.statusDebug == true){

                    return;
                }

                $http({
                    method: "POST",
                    "url": configApp.urls.add_customer,
                    data: "name=" + customerData.name_customer + "&phone=" + customerData.phone + "&address=" + customerData.address,
                    headers : {'Content-Type': 'application/x-www-form-urlencoded'}

                }).success(function(dataResult, status, headers, config){

                    callback(dataResult);

                }).error(function(data, status, headers, config){

                    console.log(status + " error message  -" + data.toString());
                });
            },

            getCustomerData: function(customerID, callback){

                if(testProvider.statusDebug == true){

                    callback(testProvider.customerData[customerID]);

                    return;
                }

                $http({
                    method: "POST",
                    "url": configApp.urls.get_customer_data,
                    data: "customer_id=" + customerID,
                    headers : {'Content-Type': 'application/x-www-form-urlencoded'}

                }).success(function(dataResult, status, headers, config){

                    callback(dataResult);

                }).error(function(data, status, headers, config){

                    console.log(status + " error message  -" + data.toString());
                });
            },
            editCustomer: function(customerObject){
                $http({
                    method: "POST",
                    "url": configApp.urls.edit_customer,
                    data: "customer_id=" + customerObject.customerId + "&name=" + customerObject.name + "&phone" + customerObject.phone + "&address=" + customerObject.address,
                    headers : {'Content-Type': 'application/x-www-form-urlencoded'}

                }).success(function(dataResult, status, headers, config){

                    callback(dataResult);

                }).error(function(data, status, headers, config){

                    console.log(status + " error message  -" + data.toString());
                });
            },
          addOrderData: function(customerID, callback){
              if(testProvider.statusDebug == true){

                  return;
              }

              $http({
                  method: "POST",
                  "url": configApp.urls.add_order,
                  data: "customerID = " + customerID,
                  headers : {'Content-Type': 'application/x-www-form-urlencoded'}

              }).success(function(dataResult, status, headers, config){

                  callback(dataResult);

              }).error(function(data, status, headers, config){

                  console.log(status + " error message  -" + data.toString());
              });
          }
        }
    }]);
});