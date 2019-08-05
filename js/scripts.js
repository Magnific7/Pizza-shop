// Business Logic
function Order(size,crust,toppings,number,delivery){
  this.pizzaSize=size;
  this.pizzaCrust=crust;
  this.pizzatoppings=toppings;
  this.pizzaNumber=number;
  this.pizzaDelivery=delivery
  }
  Order.prototype.fullInfo=function(){
     return this.pizzaSize + "," + this.pizzaCrust + "," + this.pizzatoppings + "," + this.pizzaNumber + "," + this.pizzaDelivery;
  }