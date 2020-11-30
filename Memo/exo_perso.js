var content = document.getElementById("content");

var paire = null;
var compteur = 50;
var score = 0;
var currentCase = null;
var casesTrouvees = [];
var tab = ["rouge","rouge", "bleu", "bleu", "vert", "vert", "jaune", "jaune", "orange", "orange", "mauve", "mauve", "rose", "rose", "aqua", "aqua"];

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

shuffleArray(tab);


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
var point = document.createElement("div");
point.innerText = "Score : " + score;
point.setAttribute("class", "inline");

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
		content.appendChild(reset);
        if (compteur == -1) {
        	clearInterval(decompte);
        	timer.innerText = "FINIIIII !";
        	alert("PERDU ! ! ! !");
        	document.location.reload();
        }
    }
	}, 1000);

	

c1.addEventListener('click', event => {
	c1.setAttribute("class", tab[0]);
	testPaire(c1, tab[0]);
})

c2.addEventListener('click', event => {
	c2.setAttribute("class", tab[1]);
	testPaire(c2, tab[1]);
})

c3.addEventListener('click', event => {
	c3.setAttribute("class", tab[2]);
	testPaire(c3, tab[2]);
})

c4.addEventListener('click', event => {
	c4.setAttribute("class", tab[3]);
	testPaire(c4, tab[3]);
})

c5.addEventListener('click', event => {
	c5.setAttribute("class", tab[4]);
	testPaire(c5, tab[4]);
})

c6.addEventListener('click', event => {
	c6.setAttribute("class", tab[5]);
	testPaire(c6, tab[5]);
})

c7.addEventListener('click', event => {
	c7.setAttribute("class", tab[6]);
	testPaire(c7, tab[6]);
})

c8.addEventListener('click', event => {
	c8.setAttribute("class", tab[7]);
	testPaire(c8, tab[7]);
})

c9.addEventListener('click', event => {
	c9.setAttribute("class", tab[8]);
	testPaire(c9, tab[8]);
})

c10.addEventListener('click', event => {
	c10.setAttribute("class", tab[9]);
	testPaire(c10, tab[9]);
})

c11.addEventListener('click', event => {
	c11.setAttribute("class", tab[10]);
	testPaire(c11, tab[10]);
})

c12.addEventListener('click', event => {
	c12.setAttribute("class", tab[11]);
	testPaire(c12, tab[11]);
})

c13.addEventListener('click', event => {
	c13.setAttribute("class", tab[12]);
	testPaire(c13, tab[12]);
})

c14.addEventListener('click', event => {
	c14.setAttribute("class", tab[13]);
	testPaire(c14, tab[13]);
})

c15.addEventListener('click', event => {
	c15.setAttribute("class", tab[14]);
	testPaire(c15, tab[14]);
})

c16.addEventListener('click', event => {
	c16.setAttribute("class", tab[15]);
	testPaire(c16, tab[15]);
})

content.appendChild(point);




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
			score += 10;
			point.innerText = "Score : " + score;
			content.setAttribute("class", "content boum");
			setTimeout(function() {
				content.setAttribute("class", "content")
			}, 2000)
			casesTrouvees.push(current);
			casesTrouvees.push(currentCase);
		} else {
			score -= 3;
			point.innerText = "Score : " + score;
			setTimeout(function() {
				currentCase.setAttribute("class", "cellule");
				current.setAttribute("class", "cellule");
			}, 600)
			paire = null;
		}
	}
	}
	
	if (casesTrouvees.length === 16) {
		var final = score + compteur;
		setTimeout(function () {
			alert("! ! ! ! ! GG ! ! ! ! !\n\n"+ "Score : " + score + "\nTemps restant : " + compteur + "\n\nScore Final : " + final);
		timer.innerText = "FINIIIII !";
		}, 500)
		var scoreFinal = document.createElement("h1");
		scoreFinal.innerText = "Score Final : " + final;
		scoreFinal.setAttribute("class", "scoreFinal");
		content.appendChild(scoreFinal);
	}
	
}
