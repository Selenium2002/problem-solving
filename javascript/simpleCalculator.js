        let n1 = document.getElementById("num1");
        let n2 = document.getElementById("num2");
        let res = document.getElementById("result");
        const sum = document.getElementById("add");
        const subtract = document.getElementById("sub");
        const multiply = document.getElementById("mul");
        const divide = document.getElementById("div");


        try {

            sum.addEventListener("click", ()=> {
                res.value = parseInt(n1.value) + parseInt(n2.value);
            });
    
            subtract.addEventListener("click", ()=> {
                res.value = parseInt(n1.value) - parseInt(n2.value);
            });
    
            multiply.addEventListener("click", ()=> {
                res.value = parseInt(n1.value) * parseInt(n2.value);
            });
    
            divide.addEventListener("click", ()=> {
                    res.value = parseInt(n1.value) / parseInt(n2.value);
            });
        }
        catch(error) {
            res.value = "Error";
        }