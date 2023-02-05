const reverseString = function(str) {
    let splitStr = str.split("");
    //Splits the string into an array

    let reverseArray = splitStr.reverse();
    //Reverses the array

    let joinArray = reverseArray.join("");
    //Join the array

    return joinArray;

};

// Do not edit below this line
module.exports = reverseString;
