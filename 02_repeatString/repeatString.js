const repeatString = function(str,num) {
    let finalstr= "";
    if (num <0) {
        finalstr = "ERROR";
    }
    for (let i=1; i<=num; i++){
        finalstr=finalstr.concat(str);
    }
    return finalstr;
};

// Do not edit below this line
module.exports = repeatString;
