console.log('test');


let reversedArray = arr => {
    let newArr = [];
    console.log('test');
    for (r = arr.length -1; r >= 0; r--) {
        console.log(arr[r]);
        newArr.push(arr[r]); //I think that I should use that method specially when I drag elements into the array 
        
        
        
    }
    
    // console.log(newArr += arr[r]);  //  it should work but it doesn't or maybe I will see it another time;
    //output ----->   7,4,93,46,8,10 undefined
    
    console.log(newArr);

}

arrOfNums = [10, 8, 46, 93, 4, 7]

console.log(arrOfNums.length);


reversedArray(arrOfNums);



// let arr = function (arrOfNum) {
//     console.log('test');
//     console.log(arrOfNum.reverse());
    
//     return document.getElementById('demo').innerHTML = `The array is  <br>  ${arrOfNum} 
//      <br>  <br>  The reversed array is  <br>  ${arrOfNum.reverse()}`;
// }

// arr([10, 8, 46, 93, 4, 7]);
// console.log('test');
// console.log(arr([10, 8, 46, 93, 4, 7]));
