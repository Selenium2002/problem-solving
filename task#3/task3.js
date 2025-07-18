// && -----------> AND

let x = 6;
let y = 3;

document.getElementById("and").innerHTML = 
(x < 10 && y > 1) + "<br>" +
(x < 10 && y < 1);

// || -----------> OR


document.getElementById("or").innerHTML = 
(x < 10 || y > 1) + "<br>" +
(x > 10 || y > 1) + "<br>" +
(x > 10 || y < 1); 


// ! -----------> NOT


document.getElementById("not").innerHTML = 
!(x === y) + "<br>" + 
!(x < y) + "<br>" + 
!(x > y);


// ^ -----------> XOR / BITWISE

document.getElementById("xor").innerHTML = 5 ^ 1;