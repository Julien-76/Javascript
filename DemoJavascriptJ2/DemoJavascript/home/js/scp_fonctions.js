const fct = function uneFonction(arg) {
    const c = 15;
    return arg * c;
}

const fct1 = function () {
    console.log('Fonction anonyme');
}

fct1();

const fctLambda = () => console.log('Lambda');

fctLambda();

console.log(fct(5));

console.log(fct(15));

const obj = {
    nom: 'Greg',
    age: fct,
    lambda: () => 'Toto'
}

console.log(obj.age(4));
console.log(obj.lambda());

let func = () => console.log('Bonjour');

func();
func = () => console.error('Erreur');

/**
 * Exercice
 *
 * Créer une fonctions qui affiche
 * la somme des carrés d'une suite
 * de nombre entrée au clavier
 *
 */

let ex = function () {
    const input = Number(prompt('Entrez une borne supérieure pour le calcul'));
    let result = 0;
    for (let i = 1; i <= input; i++) {
        result += Math.pow(i, 2);
    }
    return result;
}

console.log(ex());

const tab = [1,2,3,4,5,6,7,8,9];

console.log(tab.filter(x => x % 2 === 0));





