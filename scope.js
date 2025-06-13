// //there are 3 types of scopeing in js
// //1. back scope
// //2.function scope
// //3.global scope

// //block scope
// // block means scope code access only in braces
// //example : {}

// // var let const
// //inside of blocks
// //outside of block

// //inside of blocks in var

// {
//     var x = 10;
//     var y = 20;
// }
   
// // out side of the block in let 
// console.log(x)
//     console.log(y) 




// {
// let a = 10;
//     let b = 20;

//     console.log(a)
//     console.log(b) 
// }


// {
//     let num1  = 10;
//     let num2 = 20;

// console.log(num1, num2)
// }

// // function scope
// //                        var  let const
// //inside of function
// //outside of function



// function s1()
// {
//     var a = 10;
//     var b = 20;

//     console.log(a,b)
// }


// function s1()
// {
//     let a = 10;
//     let  b = 20;

//     console.log(a,b)
// }

// //outside is not defined 

// function s1()
// {
//     const a = 10;
//     const b = 20;


//     console.log(a,b)
// }


//global scope    
var a = 10;
let b = 20;
const c = 30;
console.log(a,b,c)

{
    console.log(a,b,c)
}


