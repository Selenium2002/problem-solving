console.log('test');

const s1 = "Java";
const s2 = "Python";
let mixed = "";


const mixchar = (num) => {
    for (i of s2) {
        console.log(i);  
    }
    
};

mixchar(5);





const copyCharacters = (n) => {
    console.log('test');
    console.log(n + 5);
    s2WithSlice = s2.slice(0, n);
    mixed += s1 + s2WithSlice;
    
};

copyCharacters(2);
console.log(mixed);



