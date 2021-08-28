let input   = document.querySelector('#input');
let message = document.querySelector('#message');
let cities = [];
let form = document.querySelector('form')

input.addEventListener('keydown', function(e){
  if (e.keyCode === 13) { 
    if(cities.includes(input.value)){
      message.innerHTML = 'Такой город уже был';      
      cities.pop();
    } else {
      message.innerHTML = input.value
    }
  cities.push(input.value);  
  console.log(cities);
  }  
})

function lastLetter(){
 let lastWord = cities[cities.length - 1]
 lastWord.split();
 let lastLetter = lastWord[lastWord.length-1]
}