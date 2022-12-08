/**
 *  racecar = RaCeCaR
 * @param str
 * @returns booleean | string
 */
function isPelendrome(str) {
    var reverse = "";
    for (var i = str.length - 1; i >= 0; i--) {
        reverse += str[i];
    }
    if (reverse === str) {
        var upperCaseLetter = "";
        for (var j = 0; j < reverse.length; j++) {
            if (j % 2 === 0) {
                upperCaseLetter += reverse[j].toLocaleUpperCase();
            }
            else {
                upperCaseLetter += reverse[j].toLowerCase();
            }
        }
        return upperCaseLetter;
    }
    return false;
}
var hello = isPelendrome("hello");
console.log(hello);
