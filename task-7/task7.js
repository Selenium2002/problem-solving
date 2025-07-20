let arr = function (arrOfNum) {
    console.log('test');
    console.log(arrOfNum.reverse());
    
    return document.getElementById('demo').innerHTML = `The array is  <br>  ${arrOfNum} 
     <br>  <br>  The reversed array is  <br>  ${arrOfNum.reverse()}`;
}

arr([10, 8, 46, 93, 4, 7]);
console.log('test');
console.log(arr([10, 8, 46, 93, 4, 7]));
