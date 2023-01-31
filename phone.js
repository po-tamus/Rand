function telephoneCheck(str) {

    const phoneRegExp = /(^1|)(\s|)(\(|)\d{3}(\)|)(-|\s|)\d{3}(-|\s|)\d{4}$/;

    if (str.match(/\d/g).length == 10 || str.match(/\d/g).length == 11 && /^1/.test(str) == true) {
        if (/*/(^1|)(\s|)(\(|)\d{3}(\)|)(-|)\d{3}(-|)\d{4}$/.test(str) == true*/ phoneRegExp.test(str) == true) {
            if (str.indexOf("(") == str.indexOf(")") - 4 && /\(/.test(str) == true  && /\)/.test(str) == true) {
                return true;
            } else if (/\)/.test(str) == false && /\(/.test(str) == false) {
                return true;
            }
        }
    } 
    return false;
}

const works = "555-555-5555"
const works1 = "1 (555)-555-5555";
const works2 = "3234567899";
const works3 = "(555) 555-5555"
const works4 = "1 555 555 5555"
const not1 = "555)-555-5555";
const not2 = "2(757)622-7382";
const not3 = "123**&!!asdf#";

console.log(telephoneCheck(works4));
