console.log("test");



const changeModeToggle = document.getElementById("change-mode-toggle");
const savedTheme = localStorage.getItem('theme');

console.log(document.body.classList);

if (savedTheme === 'dark') {
    document.body.classList.add('darkmode');
}
else{
    document.body.classList.add('lightmode');
}


changeModeToggle.addEventListener("click", () => {
    document.body.classList.toggle("darkmode");

    if (document.body.classList.contains('darkmode')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }

})





