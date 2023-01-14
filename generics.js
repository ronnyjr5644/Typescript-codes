function comp(compid) {
    console.log('generakvalue: ', compid);
    return compid;
}
comp('co1fs');
comp(1000);
function compi() {
    var compid = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        compid[_i] = arguments[_i];
    }
    console.log('generakvalue: ', compid);
    return compid[0];
}
compi('co1fs', 'dfdsf', 'fddw');
compi(1000, 123213, 1345532, 3521, 213);
