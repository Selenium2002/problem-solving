// const numbers = [5,1,-1,3,10];

console.log('test');

// console.log(numbers);



const smallestNumber = (numbers) => {
    let smallest = numbers[0];
    for (i of numbers) {
        if (i > 0 && i < smallest){
            // console.log(i);
            smallest = i ;
            console.log("The correct answer is --------->  " + smallest);            
        }
        else {
            console.log(-1);
        }
        
    };

    console.log('--------------------------------------------');
    
    console.log(numbers.length);
    
    console.log('--------------------------------------------');
};

const nums_1 = [5, 1, -1, 3, 10];
const nums_2 = [-7, 0, -8, -4];

smallestNumber(nums_1);


smallestNumber(nums_2);

    



