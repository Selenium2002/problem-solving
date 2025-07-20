console.log("test");
let nor = function (arr) {
    const greatest = Math.max(...arr);
    const devision = arr.map(num => num / greatest);
    console.log("test");
    console.log(devision);
    return devision;
}

nor([5, 6, 10, 13, 20]);

document.getElementById('demo').innerHTML = `<h2>JavaScript</h2> <p>Normalized Array 😊</p> ${nor([5, 6, 10, 13, 20])}`;



/*  Codes For Testing */
// console.log(nor([5, 6, 10, 13, 20]));
// document.getElementById("demo").innerHTML = nor([5, 6, 10, 13, 20]);
// document.getElementById("demo").innerHTML = normalize([98, 789, 234, 156, 546]);
// document.getElementById("demo").innerHTML = normalize([5, 6, 10, 13, 20]);

// const nums = [30, 70, 53, 4, 64, 345];
// const devision = nums.map(num => num / Math.max(...nums));
// console.log(devision);
 
// console.log(Math.max(...nums));


