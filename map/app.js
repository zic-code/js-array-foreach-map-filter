const numbers = [21,37,64,99,142];

const negatives = numbers.map(function(num){
  return num* -1;
});


const doubles = numbers.map(function(num){
  console.log(num*2);
});

function myMap(arr,callback){
  const mappedArray = [];
  for ( let i=0; i < arr.length; i++){
    mappedArray.push(callback(arr[i]))
  }
  return mappedArray
}