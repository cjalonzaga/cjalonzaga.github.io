var i = 0;
var txt = "Hi I'm Cris";

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("type-writer").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, 200);
  }
}

window.addEventListener("load", function(){
  	typeWriter();
});

function addClass(){
	var dom = document.getElementsByClassName('inner-banner-content');
	dom[0].setAttribute('class', 'inner-banner-content addsize');
}
setTimeout(addClass() , 50);

// var toggler = document.getElementById('toggler');

toggler.addEventListener('click', function(){
	document.getElementById('close-toggler').style.display = 'block';
	var menu = document.querySelector('.nav-menu');
	menu.style.display = 'flex';
	document.querySelector('#toggler').style.display = 'none';
});

var close_toggler = document.getElementById('close-toggler');
close_toggler.addEventListener('click', function(){
	document.querySelector('.nav-menu').style.display = 'none';
	document.querySelector('#toggler').style.display = 'block';
});
