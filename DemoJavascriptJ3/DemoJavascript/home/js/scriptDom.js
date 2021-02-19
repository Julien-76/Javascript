function afficherProps(obj) {

    const maDiv = document.getElementById("content");

    for(let prop in obj) {
        maDiv.innerHTML += prop + " : " + obj[prop] + "<br>"
    }
}

function creerListe() {
    const data = ['Item 1', 'Item 2', 'Item 3'];
    const ul = document.createElement("ul");
    data.forEach(value => {
        const li = document.createElement("li");
        li.innerText = value;
        li.onclick = function (evt) {
            alert(evt);
        }
        ul.appendChild(li);
    })
    document.body.appendChild(ul);
}

function createTable() {
    const dataColumns = ["Id", "Nom", "Age"];
    const table = document.createElement('table');
    const thead = document.createElement('tr');
    dataColumns.forEach(column => {
        const th = document.createElement('th');
        th.innerText = column;
        thead.appendChild(th);
    });
    table.appendChild(thead);
    for (let i = 0; i<10; i++) {
        const tr = document.createElement('tr');
        for(let j=0; j<3; j++) {
            const td = document.createElement('td');
            td.innerText = "TEST" + j;
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
    table.setAttribute("id", "monid1");
    table.setAttribute("class", "table-flex")

    document.body.appendChild(table);

}

window.onload = function () {
   // afficherProps(document);
    createTable();
    creerListe();
    const table = document.querySelector(".table-flex");
    table.children[2].innerHTML = "CHANGEMENT";
    const timer = addHolorge();
    const bouttonStop = document.querySelector("button");
    bouttonStop.addEventListener("click", function (evt) {
        clearInterval(timer);
    })

}

function addHolorge() {
    const horloge = document.getElementById("horloge");
    horloge.style.backgroundColor = "#abd458";
    console.log(horloge.style.backgroundColor);
    console.log(horloge.offsetWidth);
    const timer = setInterval(function () {
        horloge.innerText = new Date().toTimeString();
    }, 1000);

    return timer;

}

// afficherProps(window);

/**
 * Créer une table avec 3 colonnes
 * + données directement depuis une fonction JS
 */
