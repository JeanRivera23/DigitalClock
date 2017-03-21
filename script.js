var hourPrint
var minPrint
var secPrint

setInterval(function() {
	var date = new Date()
	hourPrint = date.getHours()
  minPrint = date.getMinutes()
  secPrint = date.getSeconds()
	// greeting & Background img rotation
	var greeting = document.getElementById('greeting');
	var changeMe = document.getElementById('changeMe');
	if (hourPrint < 12 && hourPrint >= 01) {
	  greeting.textContent = "Good Morning";
		changeMe.style.backgroundImage = "url('http://www.publicdomainpictures.net/pictures/180000/velka/moss-1465835643LFs.jpg')";
	}
	else if (hourPrint >= 12 && hourPrint <= 04) {
	greeting.textContent = "Good Afternoon";
	changeMe.style.backgroundImage = "url('http://www.publicdomainpictures.net/pictures/160000/velka/texture-eau-bleue-et-ondulations.jpg')";
	}
	else if (hourPrint > 04 && hourPrint <= 07) {
	  greeting.textContent = "Good Evening";
		changeMe.style.backgroundImage = "url('http://www.publicdomainpictures.net/pictures/180000/velka/beach-sand-background-1466447022hZP.jpg')";
	}
	else {
	  greeting.textContent = "Good Night";
		changeMe.style.backgroundImage = "url('http://www.publicdomainpictures.net/pictures/150000/velka/gray-rock-background-14506518799uG.jpg')";
	}

	// 12 hour conversion
	var time = document.getElementById('time');
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
