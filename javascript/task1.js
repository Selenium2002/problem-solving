const chanels = ["paramount", "itv4", "spirit", "radio"];
const categories =  ["comedy", "sport", "religion", "social issues"];
let result = [];

console.log('test');

let conc = (arr1, arr2) => {
    for (i = 0; i < arr1.length && i < arr2.length; i++){
        result += arr1[i] + " : " + arr2[i] + "\n";

        //output ----> 
        // paramount : comedy
        // itv4 : sport
        // spirit : religion
        // radio : social issues





        // result.push(arr1[i] + " : " + arr2[i]);

        //output ----> ['paramount : comedy', 'itv4 : sport', 'spirit : religion', 'radio : social issues']
    }
    console.log(result);
    // console.log(arr1[0] + " : " + arr2[0] + "\n" + arr1[1] + " : " + arr2[1] + "\n" + arr1[2] + " : " + arr2[2] + "\n"); 
}
conc(chanels, categories);






        




