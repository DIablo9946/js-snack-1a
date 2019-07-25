// Inserisci un numero, se è pari stampa il numero,
// se è dispari stampa il numero successivo
// NOTE: faccio una funzione che fa questo


// var num = parseInt(prompt("Inserisci un numero"));
// var incr = num + 1;
//
//
// function numeroIns(num) {
//   if (num % 2 == 0) {
//     document.getElementById('my').innerHTML = num;
//   } else if (num % 2 !== 0) {
//     document.getElementById('my').innerHTML = incr;
//   }
//   return
//
// }
//
// numeroIns(num);
// console.log(numeroIns);

function addOne(num){
if (num % 2 !== 0) {
     num = num + 1;
}
return num;
}
var num = parseInt(prompt("Inserisci un numero"));
var result = addOne(num);
console.log(result);
document.getElementById('my').innerHTML = result;
