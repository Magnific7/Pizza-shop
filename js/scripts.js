// Business Logic
var del = 3$;
var PizzatotalPrice = [];
function Order (pizzaSize, crust) {
this.pizzaSize = pizzaSize;
this.crust = crust;
this.Topping1 = 1;
this.Topping2 = 1.5;
this.Topping3 = 0.5;
this.pizzaPrice = 0;
this.deliveryCharge  = 3;
//  this.pizzaNumbers = [];
}
Order.prototype.pizzaCost = function () {
if (this.pizzaSize === "Small") {
  this.pizzaPrice += 3;
} else if (this.pizzaSize === "Medium") {
  this.pizzaPrice += 4;
} else if (this.pizzaSize === "Large") {
  this.pizzaPrice += 5;
}
if (this.crust === "crispy") {
  this.pizzaPrice += 1;
} else if (this.crust === "stuffed") {
  this.pizzaPrice += 2;
} else if (this.crust === "glutenFree") {
  this.pizzaPrice += 1.5;
}

this.pizzaPrice += this.Topping1;
this.pizzaPrice += this.Topping2;
this.pizzaPrice += this.Topping3;

return this.pizzaPrice;
}
Order.prototype.finalCost = function () {
var TotalPrice = 0;
for (var i = 0; i < PizzatotalPrice.length; i ++) {
  TotalPrice += PizzatotalPrice[i];
}
return TotalPrice;
}
Order.prototype.tatolCharge = function(){
   var checkout =0;
   checkout+=PizzatotalPrice[i];
   return checkout;
}
Order.prototype.tatolCharge = function(){
   return this.deliveryCharge;
}



//User Interface Logic
$(document).ready(function() {
  $("#pizzaOrder").submit(function(event) {
      event.preventDefault();
    var pizzaSize = $("select#size").val();
    var crust = $("select#crust").val();
    var Topping1 = $("select#Topping1").val();
    var Topping2 = $("select#Topping2").val();
    var Topping3 = $("select#Topping3").val();
  //    var pizzaNumbers = $("input#pizza-number").val();
    var pizzaDetails = (pizzaSize + ": " + crust + ", " + Topping1 + ", " + Topping2 + ", " + Topping3);
    var newPizzaOrder = new Order(pizzaSize, crust);
    newPizzaOrder.pizzaCost();
    PizzatotalPrice.push(newPizzaOrder.pizzaPrice);
    $("#pizzaDetails").show();
    $("#totalPizzaCost").text(newPizzaOrder.finalCost());
    $("#pizzaDetail").append("<p>" + pizzaDetails + "</p>");
    $("#size, #crust, #Topping1, #Topping2, #Topping3").val("");
  });
  $("#pizzaDetails").click(function() {
    $("#pizzaDetail").toggle();
    $("#deliver").toggle();
    $("#pickup").show();
  //    $("#pickup").hide();
    $("#checkout").hide();
    $("#deliveryPrice").hide();
  });
  $("button#deliver").click(function(event){
    event.preventDefault();
    alert("Delivery cost is" + " " + del);
    var location = prompt("Enter your address:");
    alert("We will deliver your order at" + " " + location);
    $("#deliveryPrice").append("<p>" + "Delivery cost is" + " " + del + "rwf" + " " + "</p>");
    $("#deliveryPrice").show();
    $("#pickup").hide();
    $("#checkout").show();
  })
  $("button#pickup").click(function(event){
    event.preventDefault();
    alert("Thank you for shopping with us!!!!!");
    $("#pick").append("<p>" + "You will pay" + " " + PizzatotalPrice + "rwf" + "</p>")
  })
  var talalAmount = new Order();
   $("button#checkout").click(function(event) {
     event.preventDefault();
     talalAmount.tatolCharge();
     PizzatotalPrice.push(talalAmount.deliveryCharge);
     $("#check").text(talalAmount.finalCost());
   });
  })
  
  