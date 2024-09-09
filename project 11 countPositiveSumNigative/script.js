//given an array of integers.
//return ana array ,where the first element is the count of positives numbers and the second element  is sum of negative numbers ,0 is neither positive  not negative
let countpositive=0;
let sumnegative=0;
function countPositiveSumNigative(...array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] >= 0) {
            countpositive++;
        }else{
            sumnegative+= array[i];
        }
    }
    /*
    let newarray =[];
    newarray.push(countpositive);
    newarray.push(sumnegative);
    return newarray;
    */
   return [countpositive,sumnegative]
}
console.log(countPositiveSumNigative(1,2,3,4,5,6,7,8,9,10,-11,-12,-13,-14,-15));
