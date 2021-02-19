var content = document.getElementById("content");

var paire = null;
var compteur = 30;
var currentCase = null;
var casesTrouvees = [];

var c1 = document.createElement("div");
var c2 = document.createElement("div");
var c3 = document.createElement("div");
var c4 = document.createElement("div");
var c5 = document.createElement("div");
var c6 = document.createElement("div");
var c7 = document.createElement("div");
var c8 = document.createElement("div");
var c9 = document.createElement("div");
var c10 = document.createElement("div");
var c11 = document.createElement("div");
var c12 = document.createElement("div");
var c13 = document.createElement("div");
var c14 = document.createElement("div");
var c15 = document.createElement("div");
var c16 = document.createElement("div");

var timer = document.createElement("p");
var reset = document.createElement("button");
reset.innerText = "Recommencer";
reset.setAttribute("class", "button");
reset.onclick = function() {
	document.location.reload();
}
timer.setAttribute("class", "timer");

c1.setAttribute("class", "cellule");
c2.setAttribute("class", "cellule");
c3.setAttribute("class", "cellule");
c4.setAttribute("class", "cellule");
c5.setAttribute("class", "cellule");
c6.setAttribute("class", "cellule");
c7.setAttribute("class", "cellule");
c8.setAttribute("class", "cellule");
c9.setAttribute("class", "cellule");
c10.setAttribute("class", "cellule");
c11.setAttribute("class", "cellule");
c12.setAttribute("class", "cellule");
c13.setAttribute("class", "cellule");
c14.setAttribute("class", "cellule");
c15.setAttribute("class", "cellule");
c16.setAttribute("class", "cellule");

content.appendChild(c1);
content.appendChild(c2);
content.appendChild(c3);
content.appendChild(c4);
content.appendChild(c5);
content.appendChild(c6);
content.appendChild(c7);
content.appendChild(c8);
content.appendChild(c9);
content.appendChild(c10);
content.appendChild(c11);
content.appendChild(c12);
content.appendChild(c13);
content.appendChild(c14);
content.appendChild(c15);
content.appendChild(c16);
timer.innerText = compteur;
let decompte = setInterval(function () {
	if (casesTrouvees.length === 16) {
		timer.innerText = "FINIIIII !";
	} else {
        timer.innerText = "Temps restant : " + compteur;
        compteur--;
        content.appendChild(timer);
        if (compteur == -1) {
        	clearInterval(decompte);
        	timer.innerText = "FINIIIII !";
        	alert("PERDU ! ! ! !");
        	document.location.reload();
        }
    }
    }, 1000);


c1.addEventListener('click', event => {
	c1.setAttribute("class", "cellule rouge");
	testPaire(c1, "rouge");
})

c2.addEventListener('click', event => {
	c2.setAttribute("class", "cellule bleu");
	testPaire(c2, "bleu");
})

c3.addEventListener('click', event => {
	c3.setAttribute("class", "cellule orange");
	testPaire(c3, "orange");
})

c4.addEventListener('click', event => {
	c4.setAttribute("class", "cellule rose");
	testPaire(c4, "rose");
})

c5.addEventListener('click', event => {
	c5.setAttribute("class", "cellule jaune");
	testPaire(c5, "jaune");
})

c6.addEventListener('click', event => {
	c6.setAttribute("class", "cellule mauve");
	testPaire(c6, "mauve");
})

c7.addEventListener('click', event => {
	c7.setAttribute("class", "cellule rouge");
	testPaire(c7, "rouge");
})

c8.addEventListener('click', event => {
	c8.setAttribute("class", "cellule vert");
	testPaire(c8, "vert");
})

c9.addEventListener('click', event => {
	c9.setAttribute("class", "cellule jaune");
	testPaire(c9, "jaune");
})

c10.addEventListener('click', event => {
	c10.setAttribute("class", "cellule bleu");
	testPaire(c10, "bleu");
})

c11.addEventListener('click', event => {
	c11.setAttribute("class", "cellule aqua");
	testPaire(c11, "aqua");
})

c12.addEventListener('click', event => {
	c12.setAttribute("class", "cellule vert");
	testPaire(c12, "vert");
})

c13.addEventListener('click', event => {
	c13.setAttribute("class", "cellule mauve");
	testPaire(c13, "mauve");
})

c14.addEventListener('click', event => {
	c14.setAttribute("class", "cellule aqua");
	testPaire(c14, "aqua");
})

c15.addEventListener('click', event => {
	c15.setAttribute("class", "cellule rose");
	testPaire(c15, "rose");
})

c16.addEventListener('click', event => {
	c16.setAttribute("class", "cellule orange");
	testPaire(c16, "orange");
})





function clear(object) {
	object.setAttribute("class", "cellule")
	testPaire("r");
}

function testPaire(current, couleur) {
	if (casesTrouvees.includes(current)) {
		alert("Case déjà trouvée");
	}else {
		if (paire === null) {
		paire = couleur;
		currentCase = current;
	} else {
		if (paire === couleur) {
			paire = null;
			content.setAttribute("class", "content boum");
			setTimeout(function() {
				content.setAttribute("class", "content")
			}, 2000)
			casesTrouvees.push(current);
			casesTrouvees.push(currentCase);
		} else {
			setTimeout(function() {
				currentCase.setAttribute("class", "cellule");
				current.setAttribute("class", "cellule");
			}, 800)
			paire = null;
		}
	}
	}
	if (casesTrouvees.length === 16) {
		alert("! ! ! ! ! GG ! ! ! ! !");
		timer.innerText = "FINIIIII !";
	}
	
}


//Array.prototype.includes().