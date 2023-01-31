function caesars(phrase) {
    let newPhrase = "";
    let newChar = "";

    for (let i = 0; i < phrase.length; i++) {
        if (/\w/i.test(phrase[i]) == true) {
            newChar = String.fromCharCode(((phrase.charCodeAt(i) - 65 + 13) % 26 ) + 65);
            console.log(((phrase.charCodeAt(i) - 65 + 13) % 26 ) + 65)
            newPhrase += newChar; //String.fromCharCode()
        } else {
            newPhrase += phrase[i];
        }
    }
    
    return newPhrase;
}

console.log(caesars("456789:;<=>?@ABCDEFGHIJKLM"));
console.log("H".charCodeAt(0));