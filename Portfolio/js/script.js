var headersToAnimate_morning = [
  "Hello, good morning!",
  "你好, 早上好!",
  "Selamat Pagi!",
  "காலை வணக்கம்"
];
var headersToAnimate_afternoon = [
  "Hello, good afternoon!",
  "你好, 下午好!",
  "Selamat Petang!",
  "மதிய வணக்கம்"
];
var headersToAnimate_night = [
  "Hello, good evening!",
  "你好, 晚上好!",
  "Selamat Petang!",
  "மாலை வணக்கம்"
];
var startReversAnimationAfter = 300; //ms

var today = new Date();
var time = today.getHours();

function textAnimation(greetings) {
  function reverseAnimation(headerIndex) {
    var i = greetings[headerIndex].length - 1,
      delay = 0;
    for (; i >= 0; i--, delay++) {
      let string = greetings[headerIndex].substr(0, i);
      setTimeout(
        'document.getElementById("header").innerHTML = \'' + string + "<span>&nbsp;</span>" + "';",
        150 * delay
      );
    }
    setTimeout(function () {
      animateHeaders(headerIndex + 1);
    }, 250 * delay + startReversAnimationAfter);
  }
  function animateHeaders(headerIndex) {
    var i = 0;
    if (headerIndex == greetings.length) {
      headerIndex = 0;
    }
    for (; i < greetings[headerIndex].length; i++) {
      let string = greetings[headerIndex][i];
      setTimeout(
        'document.getElementById("header").innerHTML += \'' + string + "';",
        150 * i
      );
    }

    setTimeout(function () {
      reverseAnimation(headerIndex);
    }, 250 * i + startReversAnimationAfter);
  }

  animateHeaders(0);
}

if (time >= 18) {
  // EVENING GREETINGS
  textAnimation(headersToAnimate_night);
} else if (time >= 12) {
  // AFTERNOON GREETINGS
  textAnimation(headersToAnimate_afternoon);
} else {
  // MORNING GREETINGS
  textAnimation(headersToAnimate_morning);
}