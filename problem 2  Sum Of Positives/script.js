// You get an array of numbers, return the sum of all of the positives ones.


let summ=0;
function sum( ...numbers) {
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > 0) {
            summ+= numbers[i];   
        }
    }
    return summ;
}

console.log(sum( 1,4,5));
