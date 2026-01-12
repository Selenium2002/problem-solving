//Count spaces and underscores with regEx

let specialCharacter = special => {
    let underscorePattern = /_/g;
    let spacePattern = /\s/g;

    console.log('test');

    console.log(special.match(underscorePattern));
    console.log(special.match(underscorePattern).length);
    
    console.log(special.match(spacePattern));
    console.log(special.match(spacePattern).length);

};

const text = "Hello youuuuu   and ___ _ welcome that's my number 012456783 and my email Ismail.1245dskj@yahoo.net dajk (*#@&!^$(($*590308iuir:{>";

console.log(text.length);

specialCharacter(text);

console.log('------------------------------------------------------------');


demo.innerHTML = `<h2>JavaScript</h2> <p>The number of special characters is ${specialCharacter(text)}`;

console.log('-------------------------------------------------------------');
console.log('test');




// Count spaces and underscores with for loop
let countSpacesAndUnderscores = str => {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === ' ' || str[i] === '_') {
      count++;
    }
  }
  return count;
}

const myString = "This_is a string with_spaces and_underscores.";
const totalCount = countSpacesAndUnderscores(myString);
console.log(`Number of spaces and underscores: ${totalCount}`);


