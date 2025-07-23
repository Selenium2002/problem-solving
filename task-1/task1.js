const chanels = ["paramount","itv4","spirit"];
const categories =  ["comedy","sport","religion"];
let result = [];

console.log('test');

console.log(chanels.concat(categories));

const concatination = (arr1, arr2) => {
    for (i = 0; i < arr1.length; i++)
        for (j = 0; j < arr2.length; j++)
            result += arr1[i] + ' : ' + arr2[j] + "\n" ; 
};

concatination(chanels, categories);
console.log(result);


const cars = ["BMW", "Volvo", "Mini"];
const brands = ["BMW", "Volvo", "Mini"];

let text = [];


for (let x of cars)

for (let y of brands)

text += x + ' : ' + y + "\n";

console.log(text);


