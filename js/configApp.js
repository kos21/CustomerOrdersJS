/**
 * Created by Kostiantyn on 9/9/2015.
 */
var configApp = {
    urls: {
        add_customer: "/app_dev.php/add/customer/",
        add_order: "/app_dev.php/add/order/",
        edit_customer: "/app_dev.php/edit/customer/",
        list_customers: "/app_dev.php/get/list/customers/",
        list_orders: "/app_dev.php/get/list/orders/",
        get_customer_data: "/app_dev.php/get/info/customer/update/"
    },
   templates: {
       add_customer: "customerOrder/customersOrders/views/formAddCustomer.html",
       edit_customer: "customerOrder/customersOrders/views/formEditCustomer.html",
       list_customers: "customerOrder/customersOrders/views/listCustomers.html",
       list_orders: "customerOrder/customersOrders/views/listOrders.html"
   }
};
