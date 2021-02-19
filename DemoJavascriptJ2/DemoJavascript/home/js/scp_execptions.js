let x;

x = prompt("Entrez une valeur pour tester les exceptions :");

try {
    if (x === "") throw 'Chaine vide';
    if (isNaN(x)) throw 'Pas un nombre';
    x = Number(x);
    if  (x < 10) throw new DOMException('Trop petit');
} catch (err) {
    console.error("Exception levée : " + err);
}
