//setTimeout
//execute a function once after a delayed given time in millisecond
//1000 ==> 1 second
//5000==> 5 seconds

function sayGlobal()
{
    console.log("Hello Global")
}
//it takes 2 parameters
//list function
//2nd time in milliseconds
//
let seconds = 5
setTimeout(sayGlobal, seconds * 100)

/// setInterval
//execute a function repeatedly at given
// time in milliseconds

//and to stop is ..used Ctrl + c

setInterval(sayGlobal,500)
//it will execute the function multiple times
//unless and untill we stopped it