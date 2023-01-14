//arrow notation scope of current context
var proddetails = function () {
    var prodlist = ["samsung", "apple", "redmi"];
    prodlist.forEach(function (product) {
        console.log(product);
    });
};
proddetails();
