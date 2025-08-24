

console.log('test');

let num;

const lower = document.querySelector("#lower-number");
const upper = document.getElementById("upper-number");
const key = document.querySelector("#key-number");
const show = document.getElementById("demo");
const btn = document.getElementById("button");
const box = document.querySelector(".box");
const display = document.getElementById("changeDisplay");
box.innerHTML = "<h3>" +"Hello world"+ "</h3>";

// let linearSearch = () => {
//     const list = [1, 20, 3, 8, 94, 9, 7, 5, 4, 36, 85, 34];
//     let lowerNum = lower.value;
//     let upperNum = upper.value;  
//     let keyNum = key.value; 
//     for (i = 0; i < list.length; i++) 
//         for (j = 0; j < i; j++){
//             if (list[i] < list[j]){
//                 num = list[i];
//                 list[i] = list[j];
//                 list[j] = num;
//             }
//         }

//         for (n of list) {
//             keyNum = n;
//             if (lowerNum < n && n < upperNum) {
//                 console.log(n);
//                 show.textContent = n;

//             }   
//             else {
//                 console.log(-1);
//                 // show.textContent = -1;
//             }
//         }

//     // console.log(list);
           
// }

let testCode = e => 
    {
        console.log(e.target);
        lower.value = 100;
        key.style.display = "none";
        show.innerHTML = '<h2>'+key.value+'</h2>';
        display.innerHTML = `<label> Key Number display is none </label>`; 
    }

    let changeBackgroundColor = e => {
        btn.style.backgroundColor = "rgba("+e.offsetX+", "+e.offsetY+", "+e.offsetX+","+e.offsetY+")";
        box.style.color = "rgb("+e.offsetX+", "+e.offsetY+", 50)";
        box.innerHTML=  "offsetX = "+e.offsetX+ "<br>" +"offsetY = "+e.offsetY;
        // console.log("offset X : "+e.offsetX+ "\n" + "offset Y : "+e.offsetY);
        show.style.color = "rgb("+e.offsetY+", 20,"+e.offsetX+ ")";
        show.innerHTML = `<span> offsetX = ${e.offsetX} <br> <br> offsetY = ${e.offsetY} </span>`;
        lower.value = e.offsetX;
        upper.value = e.offsetY;
        key.style.display = "block";
        display.innerHTML = `<label>Key Number display is block</label>`; 
    }

btn.addEventListener('click', testCode);

box.addEventListener('mousemove', changeBackgroundColor);  






