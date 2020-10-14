// Generare un numero casuale tra 1 e 6 per simulare il lancio di un dado (giocata 1).
// Generare un secondo numero casuale tra 1 e 6, che sarà la seconda giocata.
// Comunicare quali dei due utenti (tra giocatore 1 e giocatore 2) ha vinto.

// CHIEDERE I NOMI AI GIOCATORI

// var player_one = prompt('nome giocatore 1');
// console.log(player_one);
//
// var player_two = prompt('nome giocatore 2');
// console.log(player_two);

// CREARE I DUE TIRI DI DADI

// TIRO PLAYER ONE
var first_throw_player_one = Math.floor((Math.random() * 6) + 1);
console.log(first_throw_player_one);
document.getElementById('first_throw_player_one').innerHTML = (first_throw_player_one + '+');

var second_throw_player_one = Math.floor((Math.random() * 6) + 1);
console.log(second_throw_player_one);
document.getElementById('second_throw_player_one').innerHTML = (second_throw_player_one);


// FARE SOMMA DEI DADI
var throws_results_player_one = (first_throw_player_one + second_throw_player_one);
console.log(throws_results_player_one);
document.getElementById('player_one_result').innerHTML = (throws_results_player_one);


// TIRO PLAYER TWO

var first_throw_player_two = Math.floor((Math.random() * 6) + 1);
console.log(first_throw_player_two);
document.getElementById('first_throw_player_two').innerHTML = (first_throw_player_two + '+');

var second_throw_player_two = Math.floor((Math.random() * 6) + 1);
console.log(second_throw_player_two);
document.getElementById('second_throw_player_two').innerHTML = (second_throw_player_two);


// FARE SOMMA DEI DADI
var throws_results_player_two = (first_throw_player_two + second_throw_player_two);
console.log(throws_results_player_two);
document.getElementById('player_two_result').innerHTML = (throws_results_player_two);


if (throws_results_player_one > throws_results_player_two) {
    document.getElementById('the_winner_is').innerHTML = ('the winner is player 1');

} else if (throws_results_player_one < throws_results_player_two) {
    document.getElementById('the_winner_is').innerHTML = ('the winner is player 2');
} else {
    document.getElementById('the_winner_is').innerHTML = ('Draw');
}


// function myFunction(){
//   var first_throw = Math.floor((Math.random() * 6) + 1);
//   document.getElementById("demo").innerHTML = first_throw;
// }
