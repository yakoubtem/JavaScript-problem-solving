// in this simple assignment you are given a nember and have to make it negative,but maybe the number is already negative ?

/*
function makeNegative(nember) {
    return nember > 0 ? -nember : nember;
    }
*/
function makeNegative(nember) {
       return Math.abs(nember)*-1;
}
console.log(makeNegative(-22));