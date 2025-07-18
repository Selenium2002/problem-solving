console.log("test");
function arrayOfNumbers(arr) {
   let text = document.getElementById('demo').innerHTML;
   for (let num of arr) {
        if (Math.min(num) > 0) {
            return arr[num];
        }
        else {
            return -1
        }
    }
}

console.log("test");


console.log(arrayOfNumbers([5,1,-1,3,10]));
console.log(arrayOfNumbers([-7,0,-8,-4]));
arrayOfNumbers([5,1,-1,3,10]);
arrayOfNumbers([-7,0,-8,-4]);