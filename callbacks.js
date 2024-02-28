const waitAndMessage = func => {
  setTimeout(() => {
    console.log("sono passati 2.5s");
    func(); // endMessage()
  }, 2500);
};

const endMessage = () => {
  console.log("OPERAZIONE FINITA");
};

const start = () => {
  // se fossimo in un contesto di codice SYNC
  // 1) avremmo prima l'operazione data da waitAndMessage()
  // 2) e poi il console.log di "OPERAZIONE FINITA"

  // per waitAndMessage, endMessage è una callback function che verrà chiamata alla fine delle operazioni di waitMessage
  waitAndMessage(endMessage);
};

// start();

const normalAnswer = time => {
  console.log("📞Pronto chi è? " + time + "ms");
};
const angryAnswer = time => {
  console.log("📞CHI DIAVOLO E'??! " + time + "ms");
};
const grannysAnswer = time => {
  console.log("📞Ciao Tesoro, hai mangiato?! " + time + "ms");
};

const phoneCall = customFn => {
  const randNum = Math.floor(Math.random() * 3000);

  setTimeout(() => {
    customFn(randNum); // angryAnswer(randNum); normalAnswer(randNum); grannysAnswer(randNum)
  }, randNum);

  console.log("☎️Il telefono sta squillando....");
};

window.onload = () => {
  phoneCall(angryAnswer);
  phoneCall(normalAnswer);
  phoneCall(grannysAnswer);
  phoneCall(time => console.log("📞PRONTOOOOO????? " + time + "ms"));
};

const arr = [20, 40, 50, 100];

const forEach = callback => {
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];

    callback(element);
  }
};

forEach(el => {
  console.log(el * 2);
});

const filter = callback => {
  const filteredArr = [];

  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];

    if (callback(num)) {
      filteredArr.push(num);
    }
  }

  return filteredArr;
};

console.log(filter(num => num >= 50));
