var stringcart = /** @class */ (function () {
    function stringcart(items) {
        this.items = items;
    }
    stringcart.prototype.additem = function (item) {
        this.items.push(item);
        for (var i = 0; i < this.items.length; i++) {
            console.log(this.items[i]);
        }
    };
    return stringcart;
}());
var numbercart = /** @class */ (function () {
    function numbercart(items) {
        this.items = items;
    }
    numbercart.prototype.additem = function (item) {
        this.items.push(item);
        for (var i = 0; i < this.items.length; i++) {
            console.log(this.items[i]);
        }
    };
    return numbercart;
}());
var stringobj = new stringcart(['biscut', 'choco']);
stringobj.additem('juices');
var numberobj = new numbercart([234234, 23432, 25235, 235, 3252, 3]);
numberobj.additem(3243234);
