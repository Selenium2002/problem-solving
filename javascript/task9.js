console.log('test');
let firstField = document.getElementById("firstText");
let secondField = document.getElementById("secondText");
const concatBtn = document.querySelector("#concatination");
let numField = document.querySelector("#numField");
let showConcatPara = document.getElementById("showConcat");



// Write a function that copies the first N characters from string S2 to string S1, and does not return anything.

const s1 = "Java";
const s2 = "Python";
let mixed = "";

// const s1 = firstField.value;
// const s2 = secondField.value;

let concatChars = num => {
    let concating;
    if (num < 3){
        for (i = 0; i <= num; i++) {
            mixed += s1[i];
        }
        concating = s2 + mixed; 
        console.log(concating);
    }
   
    else{
        concating = "It is out of the range";
    } 

    console.log(concating);
};

concatChars(1);






// const copyCharacters = (n) => {
//     console.log('test');
//     console.log(n + 5);
//     s2WithSlice = s2.slice(0, n);
//     mixed += s1 + s2WithSlice;
    
// };

// copyCharacters(2);
// console.log(mixed);



