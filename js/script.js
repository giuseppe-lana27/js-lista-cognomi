/* Chiedere all’utente il cognome
inserirlo in un array con altri cognomi: ‘Bianchi’, ‘Rossi’, ‘Duzioni’, ‘Balsano’, ‘Verdi’
stampa la lista ordinata alfabeticamente
scrivi anche la posizione "umana" della lista in cui il nuovo utente si trova */
// 1. inizializzo array cognomi
var cognomi = ["Bianchi", "Rossi", "Duzioni", "Balsano", "Verdi"];
// 2. chiedo all'utente di inserire il suo cognome
var cognomeUtente = prompt("Inserisci il tuo cognome");
// inserisco il cognome digitato nell'array
cognomi.push(cognomeUtente);
// metto in ordine alfabetico i cognomi dell'array
console.log(cognomi.sort());
// 3. cerco l'indice della posizione del cognome inserito e lo stampo in pagina
for (var i = 0; i < cognomi.length; i++){
  console.log((cognomi.indexOf(cognomeUtente) + 1));
  document.getElementById('lista-cognomi').innerHTML += "<li>" + cognomi[i] + "</li>";
  document.getElementById('posizione').innerHTML = (cognomi.indexOf(cognomeUtente) + 1);
}
