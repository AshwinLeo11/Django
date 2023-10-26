// function helloYou(name){
//     console.log("hello " +name);
// }

// function addNum(num1,num2){
//     console.log(num1+num2);
// }


// function timesFive(numInput){
//     //local scope to the function
//     var result =numInput * 5
//     return result
// }

// Global scope :

var v ="GLOBAL V"
var stuff = "GLOBAL STUFF"

function fun(stuff){
    console.log(v);
    stuff = "reassign stuff inside func"
    console.log(stuff);

}


fun()
console.log(stuff)