
let mainDiv = document.getElementById("main");
let containerDiv = document.getElementById("container");
let collectorDiv = document.querySelector("#collector");
let firstText = collectorDiv.firstElementChild;
let secondText = collectorDiv.lastElementChild;
let demo = document.getElementById("demo");
let searchBtn = document.getElementById("search");
let changeStyle = document.getElementsByClassName("btnstyle")[1];

// let strChr = (charStr, char) => {
//     for(i = 0; i < charStr.length; i++){
    
//         charStr.includes(char)?console.log("The index number is " + charStr.indexOf(char)):console.log(-1);
//     }

// }

searchBtn.addEventListener("click", () => {
    charStr = firstText.value;
    char = secondText.value;
    for(i = 0; i < charStr.length; i++){
    charStr.includes(char)?demo.innerHTML = "The position of the first occurence is " + charStr.indexOf(char):demo.innerHtml = "-1";
    }
})
