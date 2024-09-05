//consider an array list of sheep where some sheep may be missing from their place .we need a function that counts the number of sheep present in the array (true  means present)


var arrSheep =["true","true","true","false","false","true","false","true","true","false","false","true","false","true","false"];
/*
function countSheep(arrSheep) {
    let present=0;
    for (let i = 0; i < arrSheep.length; i++) {
        if (arrSheep[i] === "true") {
           present++;
        }
    }
    return present;
}*/
function countSheep(arrSheep) {
    // TODO May the force be with you
    let present = 0;
    arrSheep.map((m) => {
      if (m === "true") present++;
    });
    return present;
  }
console.log(countSheep(arrSheep));
