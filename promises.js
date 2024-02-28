const myPromise = () =>
  new Promise((resolve, reject) => {
    // resolve è una funzione che se chiamata scatena un cambio di stato della Promise, diventerà FULFILLED (outcome positivo)
    // reject è una funzione che se chiamata scatena un cambio di stato della Promise, diventerà REJECTED (outcome negativo)

    const randTime = Math.floor(Math.random() * 3000);
    const randTime2 = Math.floor(Math.random() * 3000);

    // la prima funzione tra resolve e reject che verrà chiamata, determinerà lo STATO FINALE della promise
    setTimeout(() => {
      // se questa viene chiamata prima, esternamente avremo un'esecuzione del metodo .then()
      resolve("QUESTO E' IL MESSAGGIO IN CASO POSITIVO " + randTime);
    }, randTime);

    setTimeout(() => {
      // se questa viene chiamata prima, esternamente avremo un'esecuzione del metodo .catch()
      reject("QUESTO E' IL MESSAGGIO DI ERRORE IN CASO NEGATIVO " + randTime2);
    }, randTime2);
  });

myPromise()
  .then(resMsg => console.log("RESOLVED!!!", resMsg))
  .catch(errMsg => console.log("REJECTED!", errMsg))
  .finally(() => console.log("questo si visualizza a prescindere"));
