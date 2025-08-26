let mainDiv = document.getElementById("main");
let recursive = document.getElementById("recursive");
let clacBtn = document.getElementById("calc");
let demo = document.getElementById("demo");

// Test The Code
clacBtn.addEventListener("click", ()=>{
    console.log("Test");
    // demo.innerHTML = "Hello World";
    if(recursive.value < 100){
        demo.style.color = "red";
        clacBtn.style.backgroundColor = "rgba(124, 113, 124, 0.8)";
    }
    else if(recursive.value > 100 && recursive.value < 1000){
        demo.style.color = "green";
        clacBtn.style.backgroundColor = "rgba(238, 107, 238, 0.8)";
    }
    else{
        demo.style.color = "blue";
        clacBtn.style.backgroundColor = "rgba(21, 49, 172, 0.8)";
    }
    demo.innerHTML = recursive.value;
})