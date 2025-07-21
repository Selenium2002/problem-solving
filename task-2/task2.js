// const numbers = [5,1,-1,3,10];

console.log('test');

// console.log(numbers);

let smallest = (numbers) => {
    for (i = 0 ; i < numbers.length; i++) {
        console.log(numbers[i]);

        if (numbers[i] > i) {
            console.log(i);
        }

        else {
            console.log('nothing');
        }
    }
};

smallest([5,1,-1,3,10]);






