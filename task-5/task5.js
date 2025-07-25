console.log("test");


let largest = (nums) => {
    let larger = nums[0];
    devide = nums[n] / larger;
    for (n = 0; n < nums.length; n++) {

        if(nums[n] > larger) {
            larger = nums[n];
        }
            
        console.log(larger);
    }
    
    console.log('test');

    console.log(n);


    
    console.log(larger);
    
    
    // console.log(devide);
    
};

array_1 = [5, 6, 10, 13, 20];

largest(array_1);




let normalize = function (arr) {
    let greatest = Math.max(...arr);
    const devision = arr.map(num => num / greatest);
    console.log("test");
    console.log(devision);
    return devision;
}



normalize(array_1);

document.getElementById('demo').innerHTML = `<h2>JavaScript</h2> <p>Normalized Array 😊</p> ${normalize(array_1)}`;



/*  Codes For Testing */
// console.log(nor([5, 6, 10, 13, 20]));
// document.getElementById("demo").innerHTML = nor([5, 6, 10, 13, 20]);
// document.getElementById("demo").innerHTML = normalize([98, 789, 234, 156, 546]);
// document.getElementById("demo").innerHTML = normalize([5, 6, 10, 13, 20]);

// const nums = [30, 70, 53, 4, 64, 345];
// const devision = nums.map(num => num / Math.max(...nums));
// console.log(devision);
 
// console.log(Math.max(...nums));


