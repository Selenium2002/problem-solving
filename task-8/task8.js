console.log('test');

let timesOccerence = (target, arr) => {
    let count = 0;

    // for (let i = 0; i < arr.length; i++) {

    //     if (arr[i] === count[target]) {
    //         count++;
    //     }

    //     else if (arr[i] !== count[target]) {
    //         count = 1;
    //     }
    // }

    for (let num of arr) {

        num == target ? count++ : 1;
    }
    console.log(count); 
}

const arrayOfNumbers= [4,7,0,2,0,1,9,7,0];


timesOccerence(4, arrayOfNumbers);
timesOccerence(1, arrayOfNumbers);
timesOccerence(6, arrayOfNumbers);
timesOccerence(9, arrayOfNumbers);
timesOccerence(0, arrayOfNumbers);
timesOccerence(1, arrayOfNumbers);



// console.log(count[target]);  


