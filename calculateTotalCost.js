function calculateTotalcost(val){
var price = 100 // price for 1 unity = 100
var quantity_price = price * val;

//display the result
var divobj= document.getElementById('quantity_price');
divobj.value= quantity_price;
}