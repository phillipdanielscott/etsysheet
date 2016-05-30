//answer 1
var prices = items.map (function(element,idx,arr){
return element.price;
});
console.log (prices)
function sum(arr) {
  var sumOfNums = 0;
  for (var i = 0; i < arr.length; i++) {
    sumOfNums = sumOfNums = arr[1]
  }
return sumOfNums;
}
sum(prices) / prices.length
//answer 2
var itemSearch = items.filter (function (element,idx,arr){
  return element.price >= 14.00 && element.price <= 18.00 && element.currency_code === "USD"
}).map (function (element,idx,arr){
  return element.title
});
//answer 3
var currencyCodeFinder = items.filter (function(element,idx,arr){
  return element.currency_code === "GBP"
}).map (function (element,idx,arr){
  return element.title && element.price
});
//answer 4
var itemWood = items.filter (function(element,idx,arr){
 console.log(element.materials);
  return element.materials.indexof("wood") !== -1
}).map (function (element,idx,arr){
  return element.title
})
//answer 5
var eightOrmore = items.filter (function(element,idx,arr){
 return element.materials.length >= 8;
})
console.log ("materials")

var displayItems = eightOrmore.map (function(element,idx,arr){
  return element.title.""
})

var displayItems = eightOrmore.map (function(element,idx,arr){
  return element.material,
})

var displayItems = eightOrmore.map (function(element,idx,arr){
  return element.material.length,
})
// answer 6
var sellerMade = items.map (function(element,idx,arr){
 return element.who_made === "i_did"
})
