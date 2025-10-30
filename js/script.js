"use strict"

const promesseFetch = fetch(`https://data.geopf.fr/geocodage/completion/?text=du texte&maximumResponses=15`)
    .then(response => {
        if (!response.ok) {
            throw new Error(`Erreur HTTP ${response.status}`);
        }
        return response.json(); // Convertit le corps de la réponse en JSON
    })
    .then(data => {
        console.log('Données récupérées :', data);
    })
    .catch(error => {
        console.error('Une erreur s\'est produite :', error.message);
    });

