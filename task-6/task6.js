document .getElementById('demo').innerHTML = `<h2>JavaScript</h2>` 

let recers = function (n) {
  // Base case: if n is 0 or 1, the factorial is 1
  if (n === 0 || n === 1) {
    return 1;
  } else {
    // Recursive step: n multiplied by the factorial of (n-1)
    return n * recers(n - 1);
  }
}

document.getElementById('demo_1').innerHTML = recers(3);
console.log(recers(7));
console.log(recers(6));




// It can also do what loops do ----> Recursion VS Loops  
let recVsLoop = function (num) {
  let factorial = 1
  for (let i = num; i > 0; i--) {
    factorial *= i
  }
  return factorial
}

console.log('test');

// 120
console.log(recVsLoop(5));
document.getElementById('demo_2').innerHTML = `When the Recursion and the Loops are working together <br> ${recVsLoop(5)}`; 