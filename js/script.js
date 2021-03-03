/* Chiedere all’utente il cognome
inserirlo in un array con altri cognomi: ‘Bianchi’, ‘Rossi’, ‘Duzioni’, ‘Balsano’, ‘Verdi’
stampa la lista ordinata alfabeticamente
scrivi anche la posizione "umana" della lista in cui il nuovo utente si trova */
// 1. inizializzo array cognomi
var cognomi = ["Bianchi", "Rossi", "Duzioni", "Balsano", "Verdi"];
// 2. chiedo all'utente di inserire il suo cognome
var cognomeUtente = prompt("Inserisci il tuo cognome");
cognomi.push(cognomeUtente);
console.log(cognomi.sort());
