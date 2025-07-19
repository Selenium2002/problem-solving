
let x = 6;
let y = 3;

// && -----------> AND

document.getElementById("and").innerHTML =
"\"AND\"" + "<br>" +
(x < 10 && y > 1) + "<br>" +
(x < 10 && y > 1) + "<br>" +
(x < 6 && y < 5);



// || -----------> OR

document.getElementById("or").innerHTML = 
"\"OR\"" + "<br>" +
(x < 10 || y > 1) + "<br>" +
(x > 10 || y > 1) + "<br>" +
(x > 10 || y < 1); 



// ! -----------> NOT

document.getElementById("not").innerHTML = 
"\"NOT\"" + "<br>" +
!(x === y) + "<br>" + 
!(x < y) + "<br>" + 
!(x > y);


// ^ -----------> XOR / BITWISE

//I should study 

document.getElementById("xor").innerHTML = "\"XOR\"" 
+ "<br>" +
5 ^ 1 + "<br>" ;  
// 50 ^ 8 + "<br>" +  
// 10 ^ 3 ;  