let countdownTime = 60;

let timer = setInterval(function() {

  countdownTime--;

  console.log(countdownTime);

  if (countdownTime <= 0) {
    clearInterval(timer);
  }

}, 1000);