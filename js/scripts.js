var sizes = ["small", "medium" , "large"]
$(document).ready(function(){
  var Amount = 0;
  $("#order").click(function(){
      var checkVal = $("input[name=Yes]:checked").val();
      if (checkVal === "yes"){
          Amount = 3;
          var getLocation = prompt("Tell your location:");
          alert(" Pizza will be delivered at " + getLocation + " with additional amount of 3$");
      }
  })
  $("form").submit(function(event){
  var Size = parseFloat(document.getElementById('size').value);
  var Crust = parseFloat(document.getElementById('crust').value);
  var Topping = parseFloat(document.getElementById('toppings').value);
  var Quantity = parseFloat(document.getElementById('num').value);
  var total = (Size + Crust + Topping + Quantity + Amount);

  
  document.getElementById("getsize").innerHTML =  Size;
  document.getElementById("getcrust").innerHTML =   Crust;
  document.getElementById("gettopping").innerHTML =  Topping;
  document.getElementById("sum").innerHTML = total;
  $(".the-order").show();
  event.preventDefault();
  })
})

