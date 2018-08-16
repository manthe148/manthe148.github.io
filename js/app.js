/*
*
*	TABLE OF CONTENTS:
*
*/


/*Var, Const, and Let*/
const nav = document.querySelector('.nav');
const row = document.querySelector('.row');
const mission = document.querySelector('.mission');
const about = document.querySelector('.about');
const down = document.getElementById('down');


/* Open */
function openNav() {
    nav.style.display = "block";
    row.style.display = "none";
    mission.style.display = "none";
    about.style.display = "none";
}

/* Close */
function closeNav() {
    nav.style.display = "none";
    row.style.display = "block";
    mission.style.display = "block";
    about.style.display = "block";
}



function aboutMe() {
	var down = document.querySelector('#down');

	document.getElementById('about').scrollIntoView({behavior: "smooth",block: "start", inline: "start"});

}


