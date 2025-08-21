        let n1 = document.getElementById("num1");
        let n2 = document.getElementById("num1");
        let res = document.getElementById("result");
        // const sum = document.getElementById("add");
        // const subtract = document.getElementById("sub");
        // const multiply = document.getElementById("mul");
        // const divide = document.getElementById("div");

        document.getElementById("add").addEventListener("click", ()=> {
            res.value = parseInt(n1.value) + parseInt(n2.value);
        });

        document.getElementById("sub").addEventListener("click", ()=> {
            res.value = parseInt(n1.value) - parseInt(n2.value);
        });

        document.getElementById("mul").addEventListener("click", ()=> {
            res.value = parseInt(n1.value) * parseInt(n2.value);
        });

        document.getElementById("div").addEventListener("click", ()=> {
            if(n2.value === 0){
                res.value = "You cannot divide by 0"
            }
            else{
                res.value = parseInt(n1.value) / parseInt(n2.value);
            }
        });