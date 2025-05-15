var navshown = false;

function shownav(){
	if (navshown == false){
		document.getElementById("body").style.xOverflow = "hidden";
		document.getElementById("navbar").style.display = "block";
		document.getElementById("shownav").innerHTML = "hide navbar";
		
		navshown = true;
	}
	else {
		document.getElementById("body").style.xOverflow = "unset";
		document.getElementById("navbar").style.display = "none";
		document.getElementById("shownav").innerHTML = "show navbar";
		
		navshown = false;
	}
}

var explosion = document.createElement("video");
explosion.src = "/resc/img/EXPLODE.webm";
explosion.style = "position: fixed; height: 100vh; max-width:100vw; left: 50%; transform: translate(-50%); top:0; image-rendering: pixelated;";

var sound = document.createElement("audio");
sound.src = "/resc/audio/EXPLODE.wav";

explosion.addEventListener("ended", deleteshit);

function explode(){
	document.getElementById("body").appendChild(explosion);
	document.getElementById("body").appendChild(sound);
	document.getElementById("explode").href = "#"
	
	sound.play();
	explosion.play();
}

function deleteshit(){
	document.getElementById("body").removeChild(explosion);
	document.getElementById("body").removeChild(sound);
	document.getElementById("explode").href = "javascript:explode();"
}