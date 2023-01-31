/*convert numbers to roman numerals*/
const numbers = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];
const roman = ["I", "IV", "V", "IX", "X", "XL", "L", "XC", "C", "CD", "D", "CM", "M"];
let ans = "";

function convertToRoman(num) {
    
  for (let i = numbers.length-1; i >= 0; i--) {
      let temp = 0;
      if (num/numbers[i] >= 1) {
          temp = num%numbers[i];
          ans += roman[i].repeat(num/numbers[i]);
          num = temp;
      }
  }
  return ans;
}

console.log(convertToRoman(83));