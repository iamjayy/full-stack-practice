const basePrice = 520;
const discount = 120;
let shippingCost = 12;
let shippingTime = "5-12 days";

shippingCost = 15;
shippingTime = "7-14 days";

let fullPrice = basePrice - discount + shippingCost;

console.log("total cost: " + fullPrice + ". it wll arrive in " + shippingTime);
