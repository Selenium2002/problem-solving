console.log("test");
function arrayOfNumbers(arr) {

    integers= arr.filter(function checkIntegers(num) {
        if (num > 0) {
            console.log(num);
        }
        else {

            return "-1";
        }
});

}


// I should take other amount of time to finish 
console.log("test");

arrayOfNumbers([5,1,-1,3,10]);
arrayOfNumbers([-7,0,-8,-4]);

// console.log(arrayOfNumbers([5,1,-1,3,10]));
// console.log(arrayOfNumbers([-7,0,-8,-4]));