"use strict"

let address= "rue Gabriel Péri";

const URL = `https://data.geopf.fr/geocodage/completion/?text=du${address}maximumResponses=15`;

    fetch (URL)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Erreur HTTP ${response.status}`);

            }
            console.log(response);
            return response.json(); // Convertit le corps de la réponse en JSON
        })
        .then(dataJSON => {
            console.log(dataJSON);
            console.log(dataJSON.results);
            console.log(dataJSON.results[0]);
            console.log(dataJSON.results[0].city);

            let optionHTML = document.createElement("option");
            optionHTML.setAttribute();
            selectHTML.appendChild(optionHTML);
        })
        .catch(error => {
            console.error('Une erreur s\'est produite :', error.message);
            error.textContent = "Une erreuer s'est produite durant la recherche.";
        });

