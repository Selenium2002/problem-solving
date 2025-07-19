function specialCharacter(special) {
    let regex = /[^a-zA-z0-9]/g;
    return special.match(regex);
};
console.log(specialCharacter("Hello youuuuu   and ___ _ welcome that's my number 012456783 and my email Ismail.1245dskj@yahoo.net dajk (*#@&!^$(($*590308iuir:{>"));


document.getElementById("demo").innerHTML = specialCharacter("Hello youuuuu   and ___ _ welcome that's my number 012456783 and my email Ismail.1245dskj@yahoo.net dajk (*#@&!^$(($*590308iuir:{>");






