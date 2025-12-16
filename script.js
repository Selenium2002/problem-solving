let moodIcon = document.querySelector("#bgColor");

const changeModeToggle = document.getElementById("change-mode-toggle");
const savedTheme = localStorage.getItem('theme');

console.log(document.body.classList);

if (savedTheme === 'dark') {
    document.body.classList.add('darkmode');
    moodIcon.src = "assets/half-moon.png";
    moodIcon.style.marginLeft = "-70%";
    changeModeToggle.style.backgroundColor = "#4cfafaff";
}
else{
    document.body.classList.add('lightmode');
    moodIcon.src = "assets/sun.png";
    moodIcon.style.marginLeft = "70%";
    changeModeToggle.style.backgroundColor = "#103647ff";
}


changeModeToggle.addEventListener("click", () => {
    document.body.classList.toggle("darkmode");

    if (document.body.classList.contains('darkmode')) {
        document.body.classList.add('darkmode');
        localStorage.setItem('theme', 'dark');
        moodIcon.src = "assets/half-moon.png";
        moodIcon.style.marginLeft = "-70%";
        changeModeToggle.style.backgroundColor = "#4cfafaff";
    } else {
        document.body.classList.add('lightmode');
        localStorage.setItem('theme', 'light');
        moodIcon.src = "assets/sun.png";
        moodIcon.style.marginLeft = "70%";
        changeModeToggle.style.backgroundColor = "#103647ff";
    }

})





