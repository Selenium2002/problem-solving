function specialCharacter(special) {
    let regex = /[^a-zA-z0-9]/g;
    console.log('test');
    console.log(special.match(regex));
    
    return special.match(regex).length;
};
console.log(specialCharacter("Hello youuuuu   and ___ _ welcome that's my number 012456783 and my email Ismail.1245dskj@yahoo.net dajk (*#@&!^$(($*590308iuir:{>"));


document.getElementById("demo").innerHTML = `<h2>JavaScript</h2> <p>The number of special characters is ${specialCharacter("Hello youuuuu   and ___ _ welcome that's my number 012456783 and my email Ismail.1245dskj@yahoo.net dajk (*#@&!^$(($*590308iuir:{>")}`;






