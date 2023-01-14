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
class Vehicle {
	constructor(
		public vehicleId: string,
		protected noOfWheels: number) { } 

	getFuelCapacity(temp: string) {
		return temp;
	}
}
class Flight extends Vehicle{
	constructor(
		id: string,
		private flightName: string,
		protected seatCapacity: number,
		wheels: number
	)
	{
		super(id, wheels);	// Line a
	}

	getFuelCapacity(): string {
		return super.getFuelCapacity(this.vehicleId); // Line b
	}
}
var flightObj = new Flight('F10023', 'SpaceWay', 250, 18);
console.log(flightObj.getFuelCapacity()); // Line c
