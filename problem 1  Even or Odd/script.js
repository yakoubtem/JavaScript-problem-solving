// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.


/*      M1: 
function EvenOdd(nbr) {
    if (nbr % 2 ===  0) {
        console.log(`the number ${nbr} is Even`);
    }else{
        console.log(`the number ${nbr} is Odd`);
    }
}
*/

//M2:

function EvenOdd(nbr) {
  return nbr % 2 == 0 ? "Even" :"Odd";
}



console.log(EvenOdd(12)) 