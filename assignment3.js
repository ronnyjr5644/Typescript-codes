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
// class Flight {
// 	constructor(
// 		public flightId: string,
// 		private flightName: string,
// 		protected seatCapacity: number
// 	){ }
// 	getFlightDetails(): string {
// 		return `This is ${this.flightName} and its ID is ${this.flightId} with capacity ${this.seatCapacity}`	// Line 8
// 	}
// }
// var flightObj = new Flight('F10023', 'SpaceWay', 250);
// console.log(flightObj.getFlightDetails()); 	// Line 13
// console.log(flightObj.flightName);			// Line 14
//error in line 14 as we cant access constructor outside the class scope if it is private and protected
var Vehicle = /** @class */ (function () {
    function Vehicle(vehicleId, noOfWheels) {
        this.vehicleId = vehicleId;
        this.noOfWheels = noOfWheels;
    }
    Vehicle.prototype.getFuelCapacity = function (temp) {
        return temp;
    };
    return Vehicle;
}());
var Flight = /** @class */ (function (_super) {
    __extends(Flight, _super);
    function Flight(id, flightName, seatCapacity, wheels) {
        var _this = _super.call(this, id, wheels) || this;
        _this.flightName = flightName;
        _this.seatCapacity = seatCapacity;
        return _this;
    }
    Flight.prototype.getFuelCapacity = function () {
        return _super.prototype.getFuelCapacity.call(this, this.vehicleId); // Line b
    };
    return Flight;
}(Vehicle));
var flightObj = new Flight('F10023', 'SpaceWay', 250, 18);
console.log(flightObj.getFuelCapacity()); // Line c
