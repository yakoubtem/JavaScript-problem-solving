//given a random non negative number , you have to return the digits of this number within an array  in reverse order





function digitize(...nbr) {
    return `${nbr} => ${nbr.reverse()}`;
}
console.log(digitize(1,2,3,4,5));

/*
function digitize(n) {
    return n
      .toString()
      .split("")
      .map((m) => Number(m))
      .reverse();
  }
  console.log(digitize(123456789));
*/
