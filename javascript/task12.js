console.log('test');
let num;
let linearSearch = (list, lower, upper, key) => {
    for (i = 0; i < list.length; i++) 
        for (j = 0; j < i; j++){
            if (list[i] < list[j]){
                num = list[i];
                list[i] = list[j];
                list[j] = num;
            }

        }
        for (n of list) {
            key = n;
            if (lower < n && n < upper) {
                console.log(n);
            }   
            else {
                console.log(-1);
            }
        }
        console.log(list);
        
}

arrOfIntegers = [1, 20, 3, 8, 94, 9, 7, 5, 4, 36, 85, 34];

linearSearch(arrOfIntegers, 5, 50, 35);

console.log("-------------------------------------------");

linearSearch(arrOfIntegers, 60, 120, 432);