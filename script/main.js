(function() {
  'use strict;'

  function clock() {

    const currentDate = new Date();
    // pulling the time and adding 0's before and :'s after
    let time = zero(currentDate.getHours()) + ":" + zero(currentDate.getMinutes()) + ":" + zero(currentDate.getSeconds());
    // replacing the spans content with the set variable
    document.getElementById("digital-clock").innerHTML = time;

    setInterval(clock, 1000);
  }
  // allowing the zero to be added
  function zero(i) {
    if (i < 10) {
      return "0" + i;
    } else {
      return i;
    }
  }

  clock();
  zeros();


  // clock that did not work using 3 spans with ids (hours counted up with seconds until 10 seconds)

  //  function clock() {
  //    const fullDate = new Date();
  //    var hours = fullDate.getHours();
  //    var minutes = fullDate.getMinutes();
  //    var seconds = fullDate.getSeconds();
  //    if (hours < 10) {
  //      hours = "0" + hours;
  //    }
  //    if (minutes < 10) {
  //      hours = "0" + minutes;
  //    }
  //    if (seconds < 10) {
  //      hours = "0" + seconds;
  //    }
  //    document.getElementById('hour').innerHTML = hours;
  //    document.getElementById('minute').innerHTML = ":" + minutes;
  //    document.getElementById('second').innerHTML = ":" + seconds;
  //
  //  }
  //
  // setInterval(clock,1000);









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
