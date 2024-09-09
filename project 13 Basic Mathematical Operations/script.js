//your task is to creat a function that does four basic mathematical operations.
//the function should take these argument -opeartion(string/char),value(number),value2(number),
//the function should return result of numbers after applying the chosen operation
function basic(opeartion,value1,value2) {
    /*switch (opeartion) {
        case "-": return value1 - value2;
            break;
        case "+": return value1 + value2;
            break;
        case "/": return value1 / value2;
            break;
        case "*": return value1 * value2;
            break;
    
        default:return "the operation is : + , / , - , * ";
            break;
    }*/
   return eval(value1+opeartion+value2);
}
console.log(basic("/",5,5));
