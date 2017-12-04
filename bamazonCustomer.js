var mysql = require("mysql");
var inquirer = require("inquirer");

// create the connection information for the sql database

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "bamazon"
});

//display all of the items available for sale. Include the ids, names, and prices of products for sale.
connection.connect(function(err) {
  if (err) throw err;
  connection.query("SELECT item_id, product_name, price FROM products", function (err2, result) {
    if (err2) throw err2;
    console.log(result);
  });
  buyProduct();
});

function buyProduct() {
  
  // query the database for all items available
  connection.query("SELECT * FROM products", function(err, results) {
    if (err) throw err;
  //prompt users with two messages.

  // The first should ask them the ID of the product they would like to buy.
  // The second message should ask how many units of the product they would like to buy.
    inquirer
      .prompt([
        {
          name: "item",
          type: "input",
          message: "Enter the item ID you would like to buy"
        },
        {
          name: "quantity",
          type: "input",
          message: "How much would you like to buy?"
        }
      ]).then(function(order)){


        
      }  
  
  
    });

//Once the customer has placed the order, your application should check if your store has enough of the product to meet the customer's request.

//If not, the app should log a phrase like `Insufficient quantity!`, and then prevent the order from going through.

//However, if your store _does_ have enough of the product, you should fulfill the customer's order.
//This means updating the SQL database to reflect the remaining quantity.
//Once the update goes through, show the customer the total cost of their purchase.




}

//buyProduct();



