// Importo la mia funzione da names.js

const fullName = require("./names.js");

// Importo la mia funzione da hobbies.js

const hobbies = require("./hobbies.js");

// Creo una funzione che non ha parametri.
// La funzione deve restituire un oggetto con due proprietà: fullName ed hobbies
// Uso le due funzioni precedenti per costruire l'oggetto.

function person() {
  return {
    fullName: fullName("Angelo", "Lepore"),
    hobbies: hobbies("Inter", "padel", "Apple"),
  };
}

console.log(person());
