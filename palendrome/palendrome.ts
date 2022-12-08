/**
 *  racecar = RaCeCaR
 *  hello = false
 * @param str = string
 * @returns booleean | string
 */

function isPelendrome(str: string): boolean | string {
  // inialiased an empty string
  let reverse = "";

  //reverse the string and assign it to variable 'reverse'
  for (let i = str.length - 1; i >= 0; i--) {
    reverse += str[i];
  }
  //check if palendrome the reverse -> value is === 'str' parameter
  // if true convert to uppercase the every other letter on the string
  if (reverse === str) {
    let upperCaseLetter = "";
    for (let j = 0; j < reverse.length; j++) {
      if (j % 2 === 0) {
        upperCaseLetter += reverse[j].toLocaleUpperCase();
      } else {
        upperCaseLetter += reverse[j].toLowerCase();
      }
    }
    return upperCaseLetter;
  }
  return false;
}
let hello = isPelendrome("hello");
console.log(hello);
