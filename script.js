var hourPrint
var minPrint
var secPrint

setInterval(function() {
	var date = new Date()
	hourPrint = date.getHours()
  minPrint = date.getMinutes()
  secPrint = date.getSeconds()
  var time = document.getElementById('time');
  var greeting = document.getElementById('greeting');
  if (hourPrint > 12) {
    hourPrint = hourPrint - 12;
  }
  else if (hourPrint == 0) {
    hourPrint = "12";
  }
  if (hourPrint < 10) {
  	hourPrint = "0" + hourPrint;
  }
  if (minPrint < 10) {
  	minPrint = "0" + minPrint;
  }
  if (secPrint <10) {
    secPrint = "0" + secPrint;
  }
  time.innerText = hourPrint + ":" + minPrint + ":" + secPrint;
}, 1);

// greeting
// if (hourPrint < 12 && >= 01) {
//   greeting.textContent = "Good Morning";
// }
// else if (hourPrint >= 12 && <= 04) {
// greeting.textContent = "Good Afternoon";
// }
// else if (hourPrint > 04 && <= 07) {
//   greeting.textContent = "Good Evening";
// }
// else if (hourPrint >= 08 && < 12) {
//   greeting.textContent = "Good Night";
