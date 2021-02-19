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

window.onload = () => {
    // afficherProps(document)
    // ajoutParagraphe();
    // exerciceAffichage();
    //exerciceGestionPanier();
    //exerciceHorloge();
     exerciceEvent();
     //chargeFormulaire();
     //creerLayout();
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

function voiture(model, couleur, annee) {
    this.model = model;
    this.couleur = couleur;
    this.annee = annee;

    return this;
}

const auto = voiture('Audi', 'gris', 2005);
console.log(auto.model);

function exerciceHorloge() {
    let content = document.getElementById("content");
    setInterval( function() {
    var date = new Date()

    content.innerText = date;
    }, 1000)
}


 function exerciceEvent() {

   document.body.onmousemove = function (event) {
        let trainee = document.createElement("div");
        trainee.setAttribute("class", "trainee");
        trainee.style.left = event.x + "px";
        trainee.style.top = event.clientY + "px";
        trainee.style.width = "50px";
        trainee.style.height = "35px";

        setTimeout(function () {
            document.body.removeChild(trainee);
        }, 10000)
        document.body.appendChild(trainee);

    }
}

const input = ["Nom", "Prenom", "Email", "Telephone"];


function chargeFormulaire() {
    var message = document.createElement("div");
    message.innerText = "nefibnfanoi";
    document.body.appendChild(message);




}

function creerLayout() {
    let button = document.createElement("button");
    button.innerText = "cahrcher données";
    button.onclick = function () {
        let httpRequest = new XMLHttpRequest();

        httpRequest.onreadystatechange = function() {
            if (httpRequest.readyState === XMLHttpRequest.DONE) {
                if (httpRequest.status === 200) {
                    alert(httpRequest.responseText);
                }
            }
        }
        httpRequest.open('GET', "ajax/texte.txt")
        httpRequest.send();
    }
    document.body.appendChild(button);
}