console.log("test");
function normalize(arr) {
    let nor = [];
    const greatest = Math.max(...arr);
    arr.forEach(num => {
        console.log(nor = num / greatest);  
    });
}
normalize([5, 6, 10, 13, 20]);
console.log( normalize([5, 6, 10, 13, 20]));


// document.getElementById("demo").innerHTML = normalize([5, 6, 10, 13, 20]);
// document.getElementById("demo").innerHTML = normalize([98, 789, 234, 156, 546]);
// document.getElementById("demo").innerHTML = normalize([5, 6, 10, 13, 20]);

