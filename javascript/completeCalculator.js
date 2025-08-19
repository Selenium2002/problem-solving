const display = document.getElementById("display");

let appendToDisplay =  input => display.value += input;

let clearDisplay =  () => display.value = "";

let calculate =  () => {
    try{
        display.value = eval(display.value);
    }

    catch(error){
        display.value = "Error";
    }
}
