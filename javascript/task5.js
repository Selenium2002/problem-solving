console.log("test");
const array_1 = [5, 6, 10, 13, 20];
let normalizedArray = [];

let largestNumber = nums => {
    let great = nums[0];
    for (i of nums) {
        if (i > great){
            great = i;
        }   
    }

    console.log(great);
    for (j of nums) {
        console.log(j);
        
    } 
    let divide = j / great;
    console.log(divide);
    
    
}


largestNumber(array_1);




console.log('-----------------------------------');



function findLargestNumber(arr) {
  // Handle empty array case
  if (arr.length === 0) {
    return "The array is empty.";
  }

  // Initialize largestNum with the first element
  let largestNum = arr[0];

  // Iterate from the second element
  for (let i = 1; i < arr.length; i++) {
    // If the current element is greater than largestNum, update largestNum
    console.log(arr[i]);
    if (arr[i] > largestNum) {
      largestNum = arr[i];
    }
  }

  return largestNum;
}

// Example usage:
const numbers = [10, 5, 20, 8, 15];
const greatestNumber = findLargestNumber(numbers);
console.log("The greatest number is:", greatestNumber); // Output: The greatest number is: 20

const emptyArray = [];
console.log(findLargestNumber(emptyArray)); // Output: The array is empty.







// let normalize = function (arr) {
    // let greatest = Math.max(...arr);
    // const devision = arr.map(num => num / greatest);
    // console.log("test");
    // console.log(devision);
    // return devision;
// }

// normalize(array_1);

// demo.innerHTML = `<h2>JavaScript</h2> <p>Normalized Array 😊</p> ${normalize(array_1)}`;



/*  Codes For Testing */
// console.log(nor([5, 6, 10, 13, 20]));
// document.getElementById("demo").innerHTML = nor([5, 6, 10, 13, 20]);
// document.getElementById("demo").innerHTML = normalize([98, 789, 234, 156, 546]);
// document.getElementById("demo").innerHTML = normalize([5, 6, 10, 13, 20]);

// const nums = [30, 70, 53, 4, 64, 345];
// const devision = nums.map(num => num / Math.max(...nums));
// console.log(devision);
 
// console.log(Math.max(...nums));


