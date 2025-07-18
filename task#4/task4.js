function countSpaces(myString) {
    let text = "";
    const numberOfSpaces = myString.split(' ').length - 1;
    console.log(`Number of spaces: ${numberOfSpaces}`);
    document.getElementById('demo').innerHTML = text;
    text += `Number of spaces: ${numberOfSpaces}`;
}
countSpaces("Another string with spaces.");
countSpaces("Another  _ _ string   __with spaces_____");
countSpaces("Anothe r str ing    spaces .   ");
countSpaces("Another string with spaces.");

// Regular Expressions -----> I should study




