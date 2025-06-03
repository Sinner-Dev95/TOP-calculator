console.log("Hello World!");
//manipolazione elementi html calcolatrice
const calcolatrice = document.querySelector(".calcolatrice-container");
const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");
/*
console.log(calcolatrice);
console.log(display);
console.log(buttons); // Dovrebbe mostrarti una NodeList con tutti i bottoni
console.log(buttons.length); // Quanti bottoni ha trovato?*/

//funzioni tasti not number
const somma = (a, b) => a + b;
const sottrazione = (a, b) => a - b;
const moltiplicazione = (a, b) => a * b;
const divisione = (a, b) =>{
    if (b === 0){
        return'ERROR';
    }
    else {return a/b};
};
const modulo = (a, b) => a % b;

//funzione che svolge operazioni
function operazione(operatore, a, b) {
  switch (operatore) {
    case "+":
      return somma(a, b);

    case "-":
      return sottrazione(a, b);
    case "*":
      return moltiplicazione(a, b);
    case "/":
      return divisione(a, b);
    case "%":
      return modulo(a, b);
    default:
      alert("Devi selezionare un operatore! riprova!");
      return 0;
  }
}

/*
console.log(operazione("+", 5, 3)); // dovrebbe dare 8
console.log(operazione("*", 4, 2)); // dovrebbe dare 8  
console.log(operazione("@", 1, 1)); // dovrebbe dare alert + 0*/

let numeroUno = 0; //primo numero da salvare nel display
let numeroDue = 0; //secondo numero da salvare nel display
let operatore = ""; //operatore
let concatena = false; //flag on off per dire se concatenare o no numeri

//test event delegation
calcolatrice.addEventListener("click", function (event) {
  console.log(event.target);
  const tipoBottone = event.target.dataset.type; //salva il data type del bottone per capire se numero o operatore
  // se concatena e false come da default sostituisce zero display con btn premuto
  if (tipoBottone === "numero") {
    if (concatena) {
      // Aggiungi al display esistente
      display.textContent = display.textContent + event.target.textContent;
      // quindi poi concatena altro numero e trasforma flag in true
    } else {
      // Sostituisci il display
      display.textContent = event.target.textContent;
      concatena = true;
    }} 
  
  else if (tipoBottone === "reset") {// resetta il display e le variabili per le operazioni

     numeroUno = 0;
     numeroDue = 0;
     operatore = "";
     concatena = false;
     display.textContent = '0';
  } 
  else if (tipoBottone === "clear") {
    display.textContent = display.textContent.slice(0, display.textContent.length - 1);
      
    // Se il display diventa vuoto, rimetti "0"
    if (display.textContent === "") {
        display.textContent = "0";
    }
}

else if (tipoBottone === "decimale") {
    // Se non c'è già un punto, aggiungilo
    if (!display.textContent.includes(".")) {
        display.textContent = display.textContent + ".";
    }
}
  
  else if (tipoBottone === "operatore") {
    numeroUno = Number(display.textContent); //salva numero del display
    operatore = event.target.textContent; //salva operatore nella variabile operatore
    concatena = false;
  }
  else if (tipoBottone === 'uguale'){
    numeroDue = Number(display.textContent);
    risultato = operazione(operatore,numeroUno,numeroDue);
    display.textContent = risultato;
    };
});
