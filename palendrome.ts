function isPelendrome(str: string): boolean | string {
  //inialised an empty string
  let reverse = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reverse += str[i];
  }
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
let hello = isPelendrome("racecar");
console.log(hello);
