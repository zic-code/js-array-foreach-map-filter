const colors = ['teal', 'cyan', 'peach', 'purple'];
// colors.forEach(function(val) {
//  console.log(val.toUpperCase());
// })
function yell(val,i) {
  const caps = val.toUpperCase();
  console.log(`At index${i}, ${caps}`);
}
colors.forEach(yell);


const prices = [30.99, 19.99, 2.50, 99.0];
let total = 0;
for(price of prices){
  total+= price;
}
// prices.forEach(function(price){
//   total += price;
// });
console.log(total)


// myForEach([4,5,6],function(){})
// loops through an Array
// runs a callback function on each value in the Array
// returns undefined

function forEach(arr,callback){
  for(let i= 0; i < arr.length; i++){
    callback(arr[i],i);
  }
  return undefined;
}

forEach(colors, function(colors,i){
  console.log(colors.toUpperCase(),`at index of`,i);
})