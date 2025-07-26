console.log('test');


const isEvenOrOdd = () => {
    let isEmpty = false;
    let num;

    msg = window.prompt(`Please insert a number to check if it is even or odd`);

    while (!isEmpty) {
        num = msg;

        if (num % 2 === 0) {
            isEmpty = true;
            console.log('It is an even number');
        }
        else if (num % 2 === 1) {
            isEmpty = true;
            console.log('It is an odd number');
        }
        else {
            console.log('That is not a number');
            break;
            
        }
    }
}

isEvenOrOdd();