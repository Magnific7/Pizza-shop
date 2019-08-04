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



  // user interface Logic
$(document).ready(function(){
  $('button').click(function(){
  // event.preventDefault();
  console.log('error')
  if($('#pizza-size1:checked').val()){
     var inputtedPizzaSize=$('#pizza-size1').val();
     console.log(inputtedPizzaSize)
    }