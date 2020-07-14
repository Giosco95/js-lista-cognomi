// Chiedere all’utente il cognome
 // inserirlo in un array con altri cognomi: ‘Bianchi’, ‘Rossi’, ‘Duzioni’, ‘Balsano’, ‘Verdi’
 // stampa la lista ordinata alfabeticamente
 // scrivi anche la posizione "umana" della lista in cui il nuovo utente si trova


// Chiedo il cognome all'utente
var cognome = prompt('Inserisci il tuo cognome');

// Creo array con lista cognomi
var listaCognomi = ['Bianchi','Rossi','Duzioni','Balsano', 'Verdi'];

// Pusho il cognome dell'utente nell'array + ordinamento alfabetico
listaCognomi.push(cognome);
listaCognomi.sort();

// Calcolo la posizione del cognome all'interno dell'array
var index = listaCognomi.indexOf(cognome) + 1;

var i = 0;

// Stampo lista ordinata + posizione cognome con ciclo di While
while ( i < listaCognomi.length) {

     document.getElementById('lista-cognomi').innerHTML += "<li> " + listaCognomi[i] + "</li>";
     i++;
 }

document.getElementById('posizione').innerHTML = 'La tua posizione in lista è ' + index;
