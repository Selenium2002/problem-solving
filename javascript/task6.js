let baseCaseNum1 = document.getElementById("baseCaseNum1");
let baseCaseNum2 = document.getElementById("baseCaseNum2");
const demo_1 = document.getElementById('demo_1');
const demo_2 = document.getElementById('demo_2');


let recurs = function (n) {
  // Base case: if n is 0 or 1, the factorial is 1
  if (n == 0 || n == 1) {
    demo_1.innerHTML = 1;
    
  } else {
    // Recursive step: n multiplied by the factorial of (n-1)
    demo_1.innerHTML = n * recurs(n - 1);
  }
}

 
// baseCaseNum1.onchange = recurs();


// It can also do what loops do ----> Recursion VS Loops  
let recVsLoop = function (num) {
  let factorial = 1;
  for (num; num > 0; num--) {
    factorial *= num;
  }
  // demo_2.innerHTML = factorial;
  
  console.log(factorial);
  
}



// recVsLoop(6);
// recVsLoop(7);
// 120
// baseCaseNum2.onchange = recVsLoop();
