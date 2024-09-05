//sum-without-highest-and-lowest-number
let summ=0;

function sum( ...arr) {
    if(arr == null) return 0;
    /*let maxValue=Math.max(...arr);    
    let minValue=Math.min(...arr);
    let filterArr= arr.filter((x) => x !== maxValue && x!== minValue);
    for (let i = 0; i <filterArr.length; i++) {
        summ+= filterArr[i];
    }
    console.log(summ)
    */

    /* return arr
    .filter((x) => x !== Math.max(...arr) && x!== Math.min(...arr))
    .reduce((acc,current)=> acc + current , 0);  */
    return arr.sort()
    .slice(1,-1)
    .reduce((acc,current)=> acc + current , 0);    
}
console.log(sum(1,2,23,45,99,12,23,45,6));
