//given a string ,you have to return a string in which each charcter  (case sensitive) is repeted once
function doubleChar(str) {
    return str.split("").map((m) => m.repeat(2)).join('');
}
console.log(doubleChar("hamoudi"));