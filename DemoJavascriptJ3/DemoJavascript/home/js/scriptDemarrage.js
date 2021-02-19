console.log('coucou');
// Simple ligne de commentaire

var tableau = ['10', 2, 3.54];

function afficherData() {
    let variable = 'Bonjour';
    variable += ' les gens';
    console.log(variable);
    variable = 9;
    console.log(Math.sqrt(variable));
}

console.log(parseInt('toto'));

let resultat = 3 + 3 + "6";
console.log(resultat);

console.log(typeof resultat);

// console.log(Number.MAX_VALUE);
//
// console.log(Math.sqrt(-10));

afficherData();


console.error('Mon erreur');
console.table(tableau);

let nombre = 22;
console.log(nombre.toString(16));

console.log(typeof [1, 2, 3].constructor);

let monObjet = {
    name: 'Greg',
    age: 20
};

console.log(monObjet.age);

/*
TABLEAUX
 */

let tableau1 = [3, "Test"];
tableau1.push(1, "Toto");
console.log(tableau1.length);
console.table(tableau1);
for (let index = 0; index < tableau1.length; index++) {
    console.log(index + ': ' + tableau1[index]);
}
tableau1.forEach((value) => {
    //value = index + " " + value;
    console.log(value);
})
tableau1.pop();
console.table(tableau1);
let tableauTemp = [];
//tableauTemp = tableau1.splice(1, 1);
console.table(tableau1);
console.table(tableauTemp);
console.log(tableau1.join(" - "));
const addition = tableau1.filter(value => typeof value === 'number')
    .map(value => value * 2)
    .sort((A, B) => B - A)
    // .reduce((A,B) => A + B)
    .forEach(value => console.log(value));

console.log(addition);

// Afficher la somme total des nombres impairs d'un tableau de 0 - 20

let exercice = [];
for (let i = 0; i <= 20; i++) {
    exercice.push(i);
}
console.log("Total somme nbs impairs : " +
    exercice.filter(x => x % 2 === 1)
        .reduce((x, y) => x + y))

let associatifArray = new Map();

associatifArray.set("id01", exercice);
associatifArray.set("id02", 150);
console.log(typeof associatifArray.get("id01"));

let associatifObj = {};
associatifObj["id01"] = "exercice";
associatifObj["id02"] = 150;

for (let entry in associatifObj) {
    console.log(entry);
    console.log(associatifObj[entry]);
}


let associatifArray1 = new Map();

associatifArray1.set("id01", exercice);
associatifArray1.set("id02", 150);
for (let entry of associatifArray1.entries()) {
    console.log(entry);
}
//associatifArray1.forEach((v,k) => console.log(k + ":" + v))

let str = "totopoezjfz, cpz cezezfdezf ezez";
const matches = str.match(/[c]/g);
matches.forEach(value => console.log(value));
// let tabByChar = [...str];
// tabByChar.forEach(value => console.log(value));

let chaine = "ma formation javascript";
console.clear();
// Step 1
console.log(chaine.indexOf("ma"));
// Step 2
console.log(chaine.indexOf("p") /* chaine.search("p") */);
// Step 3
console.log(chaine[21] /* chaine.charAt(21) */);
// Step 4
console.log(chaine.replace("javascript", "Java"));

// Step 5
const chaineCoupee = chaine.split(" ");
console.table(chaineCoupee);

// Step 6
console.log(chaine.split("").reverse().join(""))

/*
DATE
 */
const date = new Date();
console.log(date.toLocaleString());

const monOb = new Object();
monOb["name"] = "Greg";

const monOb2 = {name: "Greg", age:40};
delete monOb2.age;
monOb2["test"] = true;
console.log(monOb2);

