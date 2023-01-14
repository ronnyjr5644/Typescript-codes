// const studentScores: number[] = [67, 89, 92, 76, 56];
// var temp = studentScores.reverse().shift();
// console.log(temp);
function productdetails(prodid, prodstatus, prodname) {
    if (prodstatus === void 0) { prodstatus = false; }
    var colors = [];
    for (var _i = 3; _i < arguments.length; _i++) {
        colors[_i - 3] = arguments[_i];
    }
    var details;
    if (!prodname) {
        var creditcard = void 0;
        (function (creditcard) {
            creditcard[creditcard["samsung"] = 25000] = "samsung";
            creditcard[creditcard["redmi"] = 50000] = "redmi";
            creditcard[creditcard["apple"] = 75000] = "apple";
        })(creditcard || (creditcard = {}));
        prodname = prodid[prodid];
    }
    if (prodname) {
        if (prodstatus) {
            details = prodname + "is available in" + colors;
        }
        else {
            details = prodname + "is out of stocks in " + colors;
        }
    }
    return details;
}
console.log(productdetails(1000, true, 'one plus', 'black', 'gold', 'red', 'silver'));
//provide an exception for invocation indicating optional and default
//rest parameter
