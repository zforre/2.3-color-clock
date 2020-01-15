(function() {
  'use strict;'


  let getCurrentTime = () => {
    currentTime = new Date();
    return currentTime;
    // dont forget the return
  }

  let $clock = document.getElementById('clock');
  console.log('here is the console log', $clock);


  $clock.innerHTML = getCurrentTime();





























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

// let getCurrentTime = () => {
//   currentTime = new Date();
//   console.log(currentTime)
// }
// //setInterval(function, ms)
// setInterval(getCurrentTime,1000);
//

// let $button = document.querySelector('button');
// $button.addEventListener('click', () => {
//   console.log('You clicked the button')
// });



})();
//IIFE
