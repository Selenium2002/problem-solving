// const numbers = [5,1,-1,3,10];

console.log('test');

// console.log(numbers);


    // numbers[i] < smallest && numbers[i] > 0 ? smallest = numbers[i] : smallest = -1;

const smallestNumber = (numbers) => {
    let smallest = numbers[0];

    for (i = 1 ; i < numbers.length; i++) {
        if (numbers[i] < smallest && numbers[i] > 0) {
            smallest = numbers[i];
        }

        // elseif(numbers[i] < 0) {
        // smallest = -1;
        // }

    };
    console.log(smallest);
};

const nums_1 = [5,1,-1,3,10];
const nums_2 = [-7,0,-8,-4];

smallestNumber(nums_1);
smallestNumber(nums_2);



