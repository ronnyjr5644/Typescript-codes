// function employeeDetails<T, S>(empId: T, empStatus: S): S {
// 	let output;
// 	if (typeof empStatus === 'string') {
// 		output = `${empId} is Available`;
// 	} else {
// 		if (typeof empStatus === 'boolean') {
// 			if (empStatus) {
// 				output = `${empId} is Busy`;
// 			} else {
// 				output = `${empId} is in DND`;
// 			}
// 		}
// 	}
//     console.log('asfasf',output);
// 	return output;
// }
// function productDetails<T>(empStatus?: boolean, ...empId: T[]): Array<T> {
// 	let output; 			// Line 2
// 	if (empStatus) {
// 		output = empId.filter(empObj => empObj.empId === 'I1001'); // Line 4
// 	}
// 	return output;
// }
// console.log(productDetails(true, 
// 	{ empId: 'I1001', empName: 'Thomas' },
// 	{ empId: 'I1002', empName: 'Samuel' },
// 	{ empId: 'I1001', empLevel: 4 }
// ));
// class Employee<T> {
// 	constructor(
// 		private empId: T,
// 		private empName?: string,
// 		private availability: string
// 	) { }

// 	getDetails(): T {
// 		return this.empId;
// 	}
// }

// var empObjString = new Employee<string>('I1001', 'David', 'Available');
// console.log(empObjString.getDetails());

// var empObjNum = new Employee<number>(1001, 'David', 'Available');
// console.log(empObjNum.getDetails());

// Create a generic function to sort numbers as well as string values.

// Refer to the sample output for the same: 

// input1:

// [1,4,2,9,3]

// output1:

// [1,2,3,4,9]

 

// input2:

// [“A”,”K”,”B”,”L”]

// output2:

// [“A”,”B”,”K”,”L”]