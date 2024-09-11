//write a methode that will get an integer array as parametre and will process every number from the array .
//ruturn a new array with processig evry number if the input-array like this:
//if the number has ana integer square root ,take this otherwise square the number. 


function squareOrSquareRoot(array){
    /*let newarray=[];
    for (let i = 0; i < array.length; i++) {
        if (Number.isInteger(Math.sqrt(array[i]))) {
            newarray.push(Math.sqrt(array[i]));
        }else{
            newarray.push(array[i] * array[i])
        }
    } 
    return newarray;*/
    return array.map((x)=> Number.isInteger(Math.sqrt(x)) ? Math.sqrt(x) : x * x)
}
console.log(squareOrSquareRoot([4,3,9,7,2,1]));
