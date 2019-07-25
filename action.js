// Inserisci un numero, se è pari stampa il numero,
// se è dispari stampa il numero successivo
// NOTE: faccio una funzione che fa questo


var num = parseInt(prompt("Inserisci un numero"));
var incr = num + 1;


function numeroIns(num) {
  if (num % 2 == 0) {
    document.getElementById('my').innerHTML = num;
  } else if (num % 2 !== 0) {
    document.getElementById('my').innerHTML = incr;
  }
}

numeroIns(num);
console.log(numeroIns);
