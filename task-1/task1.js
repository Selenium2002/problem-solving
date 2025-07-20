const arr1 = ["paramount","itv4","spirit"];
const arr2 =  ["comedy","sport","religion"];

function first(channels, categories) {

    return channels + " : " + categories; 

}

console.log(first("paramount", "comedy"));

document.getElementById("task_1").innerHTML = first("paramount", "comedy");



function second(chanels, catigories) {

    return chanels + " : " + catigories; 

}

console.log(second("itv4", "sport"));

document.getElementById("task_2").innerHTML = second("itv4", "sport");



function third(channils, categories) {

    return channils + " : " + categories; 

}

console.log(third("spirit", "religion"));

document.getElementById("task_3").innerHTML = third("spirit", "religion");

