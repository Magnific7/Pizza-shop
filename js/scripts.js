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
     //user interface Logic

     $(document).ready(funtion()){
       $('button').click(function(){
         // event.preventDefault();
         console.log('error')
         if($('#size1:checked').val()){
          var inputtedPizzaSize=$('#-size1').val();
          console.log(inputtedPizzaSize)
         }
         else if($('#size2:checked').val()){
             var inputtedPizzaSize=$('#pizza-size2').val();
             console.log(inputtedPizzaSize)
         }
         else if($('#size3:checked').val()){
             var inputtedPizzaSize=$('#size3').val();
             console.log(inputtedPizzaSize)
         }
         else{
             console.log('error');
         }
         if($('#crust1:checked').val()){
          var inputtedPizzaCrust=$('#crust1').val();
          console.log(inputtedPizzaCrust)
         }
         else if($('#crust2:checked').val()){
             var inputtedPizzaCrust=$('#crust2').val();
             console.log(inputtedPizzaCrust)
         }
         else if($('#crust3:checked').val()){
             var inputtedPizzaCrust=$('#crust3').val();
             console.log(inputtedPizzaCrust)
         }
         else{
             console.log('error');
         }
         if($('#topping1:checked').val()){
          var inputtedPizzaToppings=$('#topping1').val();
          console.log(inputtedPizzaToppings)
         }
         else if($('#topping2:checked').val()){
             var inputtedPizzaToppings=$('#topping2').val();
             console.log(inputtedPizzaToppings)
         }
         else if($('#topping3:checked').val()){
             var inputtedPizzaToppings=$('#topping3').val();
             console.log(inputtedPizzaToppings)
         }
         else if($('#topping4:checked').val()){
          var inputtedPizzaToppings=$('#topping4').val();
          console.log(inputtedPizzaToppings)
       }
       else if($('#topping5:checked').val()){
        var inputtedPizzaToppings=$('#topping5').val();
        console.log(inputtedPizzaToppings)
     }
     else{
      console.log('error');
  }
  var inputtedPizzaNumber=$('#num').val();
console.log(inputtedPizzaNumber);
if($('#del1:checked').val()){
   var inputtedPizzaDelivery=$('#del1').val();
   console.log(inputtedPizzaDelivery)
  }
  else if($('#del2:checked').val()){
   var inputtedPizzaDelivery=$('#del2').val();
   console.log(inputtedPizzaDelivery)
  }
  else{
      console.log('error')
  }
  $('ul#Order').append("<li><span>" + newOrder.fullInfo() + "</span></li>");
   $("#show-pizza").show();
   // $("#show-contact h2").text(newOrder.pizzaSize);
   $("#size?").text(newOrder.pizzaSize);
   $("#crust?").text(newOrder.pizzaCrust);
   $("#topping?").text(newOrder.pizzatoppings);
   $("#num?").text(newOrder.pizzaNumber);
});
$('#pizzaSize').val();
console.log()
$('#pizza-crust').val();
console.log()
$('pizza-topping').val();
$('select#one').val("");
});