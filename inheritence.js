var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var account = /** @class */ (function () {
    function account(accountno, _balance, accountname) {
        this.accountno = accountno;
        this._balance = _balance;
        this.accountname = accountname;
    }
    Object.defineProperty(account.prototype, "balance", {
        get: function () {
            return this._balance;
        },
        set: function (no) {
            this._balance = no;
        },
        enumerable: false,
        configurable: true
    });
    account.prototype.deposit = function (amt) {
        this._balance += amt;
        console.log('balance after deposit: ', this._balance);
    };
    return account;
}());
var savingaccount = /** @class */ (function (_super) {
    __extends(savingaccount, _super);
    function savingaccount(rateofinterest, accountno, _balance) {
        var _this = _super.call(this, accountno, _balance) || this;
        _this.rateofinterest = rateofinterest;
        return _this;
    }
    savingaccount.prototype.addinterest = function () {
        var interest = this.balance * this.rateofinterest / 100;
        _super.prototype.deposit.call(this, interest);
    };
    return savingaccount;
}(account));
var savobj = new savingaccount(2.5, 332342342, 8000);
savobj.balance = 9000;
savobj.addinterest();
