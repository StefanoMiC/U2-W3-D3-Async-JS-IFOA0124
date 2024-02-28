//1) la fetch effettua una richiesta HTTP ad un indirizzo tramite URL (che è il primo parametro OBBLIGATORIO)
// fetch("https://randomuser.me/api/?gender=female&results=5", {method: "GET"}) // il metodo GET è implicito e non serve specificarlo
fetch("https://randomuser.me/api/?gender=female&results=5")
  // 2) si attende il tempo necessario alla risposta del server (è sempre variabile!)
  // il metodo .then() si attiverà se e solo se il reperimento dati va a buon fine, e al momento giusto!
  .then(response => {
    // response è il valore di ritorno della fetch una volta conclusa,
    // rappresenta un oggetto con delle informazioni iniziali da cui possiamo ricavare il dato ricevuto dal server
    console.log(response);
    if (response.ok) {
      // se abbiamo una risposta positiva e lo status è da 100 ~ 399
      // il metodo .json() ci traduce il body da readableStream a oggetto JS nativo tramite una conversione da JSON
      return response.json();
    } else {
      // il throw ci serve per saltare l'esecuzione del prossimo .then() in caso di dato mancante, e arrivare direttamente al .catch() per gestire l'errore
      throw new Error("ERRORE NEL REPERIMENTO DATI");
      // dopo un throw l'esecuzione si ferma
      // non ci può essere un codice eseguito successivamente
    }
  })
  .then(userData => {
    // userData rappresenta il valore di ritorno della precedente funzione, ovvero il risultato di response.json() dopo il suo completamento
    // QUI DENTRO POSSIAMO ESSERE ASSOLUTAMENTE TRANQUILLI NELL'UTILIZZARE IL DATO ARRIVATO DAL SERVER
    console.log("USERDATA", userData);

    // DOM Manipulation è da fare qui dentro!
    const container = document.getElementById("data-from-api");
    container.style = "text-align: center;";

    userData.results.forEach(user => {
      const personDiv = document.createElement("div");
      personDiv.style = "display: inline-block;";

      const img = document.createElement("img");

      const imgURL = user.picture.large;

      img.src = imgURL;
      img.alt = user.name.first + " " + user.name.last;
      img.style = "width: 200px; height: 200px; border-radius: 50%; object-fit: cover";

      const p = document.createElement("p");
      p.innerText = user.name.title + " " + user.name.first + " " + user.name.last;

      personDiv.appendChild(img);
      personDiv.appendChild(p);
      container.appendChild(personDiv);
    });
  })
  // 2b) se c'è un errore nella richiesta, e il dato non ci viene ritornato si scatena il metodo .catch() AL POSTO DI .then()
  .catch(error => console.log(error));
