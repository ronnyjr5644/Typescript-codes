function employeeDetails(empId, empStatus) {
    var output;
    if (typeof empStatus === 'string') {
        output = "".concat(empId, " is Available");
    }
    else {
        if (typeof empStatus === 'boolean') {
            if (empStatus) {
                output = "".concat(empId, " is Busy");
            }
            else {
                output = "".concat(empId, " is in DND");
            }
        }
    }
    console.log('asfasf', output);
    return output;
}
