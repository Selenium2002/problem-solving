console.log('test');


// Write a function that copies the first N characters from string S2 to string S1, and does not return anything.

const s1 = "Java";
const s2 = "Python";
let mixed = "";

let concatChars = num => {
    for (i = num; i < s1.length; i++) {
        if (num <= 3) {
            mixed += s1[i];
            console.log(s1[i]);
        }

        else if (num > 3) {
            mixed += "It is out of the range";   
        } 
    }
    console.log(mixed);
    
    console.log(s2 + mixed);
    
    console.log('test'); 
};

concatChars(2);





// const copyCharacters = (n) => {
//     console.log('test');
//     console.log(n + 5);
//     s2WithSlice = s2.slice(0, n);
//     mixed += s1 + s2WithSlice;
    
// };

// copyCharacters(2);
// console.log(mixed);



