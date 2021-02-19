const input = ["Nom", "Prenom", "Email", "Telephone"];

function chargeFormulaire() {
    let form = document.createElement("form");
    form.method = "GET";
    form.name = "formulaire";
    form.action = "javascript:traiterForm();";
    input.forEach(name => {
        let label = document.createElement("label");
        label.for = name;
        label.innerText = name;
        let input = document.createElement("input");
        switch (name) {
            case "Nom":
            case "Prenom":
                input.type = "text";
                break;
            case "Email":
                input.type = "email";
                break;
            case "Telephone":
                input.type = "phone";
                break;
        }
        input.id = name;
        input.name = name;

        label.appendChild(input);

        form.appendChild(label);
    });

    let submit = document.createElement("input");
    submit.innerText = "Envoyer";
    submit.type = "submit";
    form.appendChild(submit);

    let reset = document.createElement("button");
    reset.innerText = "Reset";
    reset.onclick = function () {
        form.reset();
    }

    form.appendChild(reset);
    document.body.appendChild(form);


}

window.onload = function () {
    chargeFormulaire();
}

function traiterForm() {
    let form = document.forms[0];
    let formData = new FormData(form);
    formData.forEach(value => console.log(value));
    let search = new URLSearchParams(formData);
    //search.forEach(value => console.log(value))
    let queryString = search;
    console.log(queryString);
}
