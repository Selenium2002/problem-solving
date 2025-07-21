
let x = 6;
let y = 3;


//Bitwise Operators

// & -----------> AND

console.log(x & y);

document.getElementById("and").innerHTML =
`\"AND\" ---> & <br> ${x & y} `;



// | -----------> OR

console.log(x | y);

document.getElementById("or").innerHTML = 
`\"OR\" ---> | <br> ${x | y}`;



// ~ -----------> NOT

console.log(~ x);
console.log(~ y);

document.getElementById("not").innerHTML = 
`\"NOT\" ---> ~ <br> 
not 'x' equals ${~ x} <br>
not 'y' equals ${~ y}`;


// ^ -----------> XOR

console.log(x ^ y);

document.getElementById("xor").innerHTML =
`\"XOR\" ---> ^ <br> ${x ^ y}`;  


// << ----------> Zero Fill Left Shift



// >> ----------> Signed Right Shift



// >>> ---------> Zero Fill Right Shift
  