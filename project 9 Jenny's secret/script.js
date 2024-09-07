//jeanny has written a function that returnns a greeting for a user,However,she's in love with yaakoub,and would like to greet him  slightly different, she added a special case to her function , but she made a mistake, can you help her?

/*
function greet(name) {
    return "hello, " + name + "!";
    if (name === "jhonny") {
        return "heloo, my love!"
    }
}
*/

 

function greet(name) {
    return name === "yaakoub" ? "heloo, my love!" : "hello, " + name + "!";
}

console.log(greet("yaakoub"));

