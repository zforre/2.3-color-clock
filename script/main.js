(function() {
  'use strict;'


// let $element = document.querySelector('span');
// console.log($element);
//
// $element.textContent = "Hello, Sally!"
//
//
// let $saying = document.querySelector('#saying')
// console.log($saying.textContent);
//
// $saying.textContent = "That's all folks."

// let date = new Date();
// console.log(date);

let getCurrentTime = () => {
  currentTime = new Date();
  console.log(currentTime)
}
//setInterval(function, ms)
setInterval(getCurrentTime,1000);

// let $button = document.querySelector('button');
// $button.addEventListener('click', () => {
//   console.log('You clicked the button')
// });



})();
//IIFE
