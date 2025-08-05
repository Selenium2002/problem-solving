
console.log('test');

function findLargestNumber(arr) {

  let arrOfIntegers = [];
  let largestNum = arr[0];

  for (i = 0; i < arr.length; i++) {
    // console.log(arr[i]);
    if (arr[i] > largestNum) {
      largestNum = arr[i];
    }
    
  }
  console.log('test');
  console.log(largestNum);
  for (num of arr) {
    console.log(num);
    const normalizing = num / largestNum;
    // arrOfIntegers += normalizing + " ";
    arrOfIntegers.push(normalizing);
  }
  console.log(arrOfIntegers);

  // return largestNum;
}

const numbers_1 = [10, 5, 20, 8, 15];
const numbers_2 = [2, 4, 6, 8, 10];

findLargestNumber(numbers_1);
findLargestNumber(numbers_2);




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


