// window.alert("Alerte");
function afficherProps(obj) {
    for (prop in obj) {
        const val = obj[prop];
        document.getElementById("content").innerHTML += "<br>" + prop + " : " + val;
    }
}

// afficherProps(document);

function ajoutParagraphe() {
    let div = document.getElementById("content");


    for (let i = 0; i < 10; i++) {
        let p = document.createElement("p");
        p.innerHTML = "Bonjour à tous";
        p.id = i;

        p.onclick = function () {
            console.log('Click');
        };
        div.appendChild(p);
    }

    div.removeChild(document.getElementById("2"));
}

function manipulationCss() {

    let content = document.getElementById("content");

    content.style.border = "2px solid black";

    content.innerText = "Je suis stylé";

    console.log(content.offsetWidth);


    const styles = getComputedStyle(content);

    console.log(styles.backgroundColor);

}

window.onload = () => {
    // afficherProps(document)
    // ajoutParagraphe();
    // exerciceAffichage();
    // exerciceGestionPanier();
    // manipulationTableau();
    // calculTVAData();
    // afficherCompteur();
    // afficherHorloge();
    //  manipulationCss();
    // evenements();
    exerciceTrainee();

}

/**
 * Exercice :
 *
 * Construire une liste non ordonnée avec un affichage décroissant
 * lors d'un click sur un bouton;
 * Toute nouvelle donnée provient d'un input
 */

function exerciceAffichage() {

    let ul = null;
    let button = document.createElement("button");
    button.innerText = "Ajout d'un élement";
    button.onclick = function () {

        if (document.getElementById("liste") == null) {
            ul = document.createElement("ul");
            ul.id = "liste";
            document.body.appendChild(ul);
        } else {
            let input = prompt("Entrez votre donnée");

            if (input != null && input !== "") {
                let li = document.createElement("li");
                li.innerText = input;

                ul = document.getElementById("liste");
                ul.appendChild(li);
            }


        }
        gestionAttributs(ul);

    }
    document.body.appendChild(button);


}

function gestionAttributs(ul) {
    if (ul != null) {
        for (let i = 0; i < ul.children.length; i++) {
            ul.children[i].setAttribute("class", "ligneColoree");
        }
        // ul.setAttribute("class", "ligneColoree");
    }
    let element = document.querySelectorAll(".ligneColoree");
    if (element != null) {
        console.log(element);
        element.forEach(node => console.log(node.innerHTML));
    }
}

/**
 * Exercice:
 * Panier associé à une liste de produits
 * Un bouton ajouter sur chaque entrée de la liste
 * Afficher le total des prix;
 */

const data = [
    {
        nom: "Chaise",
        prix: 25,
        action: ajoutPanier
    },
    {
        nom: "Table",
        prix: 150,
        action: ajoutPanier
    },
    {
        nom: "Meuble TV",
        prix: 250,
        action: ajoutPanier
    }
];
let panier = [];
let total = 0;

function exerciceGestionPanier() {


    let content = document.getElementById("content");

    let div_descriptif = document.createElement("div");
    let h1_descriptif = document.createElement("h1");
    h1_descriptif.innerText = "Descriptif Produit";
    div_descriptif.appendChild(h1_descriptif);
    div_descriptif.appendChild(generateTable(data, "stock"))
    content.appendChild(div_descriptif);


    /*
    PANIER
     */
    let div_panier = document.createElement("div");
    let h1_panier = document.createElement("h1");
    h1_panier.innerText = "Mon panier";
    div_panier.appendChild(h1_panier);

    div_panier.appendChild(generateTable(panier, "panier"))

    content.appendChild(div_panier);


}

function generateTable(data, id) {
    let table = document.createElement("table");
    table.id = id;
    for (let i = 0; i < data.length; i++) {
        table.appendChild(creerLigne(data, i));
    }
    return table;
}

function creerLigne(data, i) {
    let tr = document.createElement("tr");
    const element = data[i];
    for (property in element) {
        let td = document.createElement("td");
        if (typeof element[property] === "function") {
            let button = document.createElement("button");
            button.innerText = "Ajouter au panier";
            button.onclick = function () {
                ajoutPanier(i)
            };

            td.appendChild(button);
        } else {
            td.innerHTML = element[property];
        }

        tr.appendChild(td);
    }
    return tr;
}

function ajoutPanier(index) {
    let data_panier = document.getElementById("panier");
    const temp = data[index];
    delete temp.action;
    panier.push(temp);
    data_panier.appendChild(creerLigne(panier, index))
    total += temp.prix;

    if (total > 0) {
        if (document.getElementById("total") === null) {
            let prixTotal = document.createElement("p");
            prixTotal.innerText = "Prix total " + total + " EUR";
            prixTotal.id = "total";
            document.getElementById("panier").append(prixTotal);
        } else {
            document.getElementById("total").innerText = "Prix total " + total + " EUR";
        }

    }

}


function manipulationTableau() {
    let tableau = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    tableau.filter(x => x % 2 !== 0)
        .map(x => Math.pow(x, 2))
        .forEach(x => console.log(x));

    const somme = tableau.filter(x => x % 2 === 0)
        .map(x => x + 1)
        .reduceRight((x, y, index) => {
            console.log('X * Y = ' + x * y);
            return x * y
        });
    console.log('Somme : ' + somme);
}

/**
 * Exercice
 * Calculé le prix total TVAC d'une liste de produits du stock
 * avec les méthodes intégrées de l'objet Array
 */
function calculTVAData() {
    const sommeTVAC = data.map(obj => obj.prixTVAC = obj.prix * 1.21)
        .reduce((x, y) => x + y);
    document.writeln("Somme TVAC : " + sommeTVAC);
    console.table(data);
}


function afficherCompteur() {

    let content = document.getElementById("content");
    let message = "JE M'AFFICHE APRES 2 SECONDES !!!";
    let compteur = 0;

    // setTimeout(function () {
    //     content.innerText = message;
    // }, 2000)


    let button = document.createElement("button");
    button.innerText = "Arrêt du compteur";
    button.onclick = function () {
        clearInterval(timer);
        compteur = 0;
    }
    document.body.appendChild(button);


    let timer = setInterval(function () {
        content.innerText = compteur;
        compteur++;10:59 25-11-20
    }, 1000);


    let buttonReprise = document.createElement("button");
    buttonReprise.innerText = "Reprise du compteur";
    buttonReprise.onclick = function () {
        timer = setInterval(function () {
            content.innerText = compteur;
            compteur++;
        }, 1000);

    }
    document.body.appendChild(buttonReprise);

}

/**
 * Exercice
 * Afficher la date et l'heure sur la page.
 * avec un rafaichissement toutes les secondes
 */
function afficherHorloge() {

    let content = document.getElementById("content");
    content.innerText = new Date().toLocaleTimeString();
    setInterval(function () {
        content.innerText = new Date().toLocaleTimeString();
    }, 1000);

}

function evenements() {

    let content = document.getElementById("content");

    let button = document.createElement("button");
    button.innerText = "CLick me";
    button.onauxclick = function(event) {
        console.log(event);
    };
    button.addEventListener('click', function (event) {
        console.log(event)
    })

    content.appendChild(button);

    creerSelectBox(content);



}

function creerSelectBox(content) {

    let select = document.createElement("select");
    select.multiple = true;
    for (let i = 0; i < 5; i++) {
        let option = document.createElement("option");
        option.value = 'Value ' + i;
        option.innerText = 'Value' + i;
        select.appendChild(option);
    }
    select.onchange = function (ev) {
        message.innerText = ev.target.value;
    }

    content.appendChild(select);

    let message = document.createElement("p");

    content.appendChild(message);

}

/**
 * Créer un effet de trainée qui suit votre souris à l'écran
 */
function exerciceTrainee() {

   document.body.onmousemove = function (event) {
        let trainee = document.createElement("div");
        trainee.setAttribute("class", "trainee");
        trainee.style.left = event.x + "px";
        trainee.style.top = event.clientY + "px";
        trainee.style.width = "10px";
        trainee.style.height = "10px";

        setTimeout(function () {
            document.body.removeChild(trainee);
        }, 1000)
        document.body.appendChild(trainee);

    }
}

