const words = [
  'immunoelectrophoretically',
  'rotavator',
  'tsktsk',
  'psychophysicotherapeutics',
  'squirrelled',
  'crypt',
  'uncopyrightable',
  'cysts',
  'pseudopseudohypoparathyroidism',
  'unimaginatively'
];






const allCheckboxes = document.querySelectorAll('input[type="checkbox"]');
const checked = Array.from(allCheckboxes).filter(function(box){
  return box.checked;
});

const completedItems = checked.map(function(checkbox){
  return checkbox.parentElement.innerText
});


function extractCompletedTodos(){
  const allCheckboxes = document.querySelectorAll('input[type="checkbox"]');

   return Array.from(allCheckboxes).filter(function(box){
    return box.checked;
  })
  .map(function(checkbox){
    return checkbox.parentElement.innerText;
  });
}

function myFilter(arr,callback){
  const filteredArray = [];
  for (let i = 0; i< arr.length;){
    if(callback(arr[i],i, arr)){
      filteredArray.push(arr[i])

    }
  }
  return filteredArray
}

const shorties = myFilter(words, function(word){
  return word.lengWth <=10;
});

const everyOtherWord = myFilter(words, function(word,i){
 return i %2 ===0
});