function creerLayout() {
    let button = document.createElement("button");
    button.innerText = "Charger données avec AJAX";
    button.onclick = function () {

        let httpRequest = new XMLHttpRequest();

        httpRequest.onreadystatechange = function () {
            if (httpRequest.readyState === XMLHttpRequest.OPENED) {
                httpRequest.setRequestHeader('Access-Control-Allow-Origin', '*');
            }
            if (httpRequest.readyState === XMLHttpRequest.DONE) {
                if (httpRequest.status === 200) {
                    let response = JSON.parse(httpRequest.responseText);
                  //  console.log(response);
                    for (let i = 0; i < response.length; i++) {
                        let obj = response[i];
                        for(let prop in obj) {
                            console.log(prop + ":" + obj[prop])
                        }
                    }
                    alert(httpRequest.responseText);
                }
            }

        }

        httpRequest.open('GET', "ajax/info.json");
        httpRequest.send();
    }

    document.body.appendChild(button);
}

window.onload = function () {
    creerLayout();
}
