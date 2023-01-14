function x() {
    var num = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        num[_i] = arguments[_i];
    }
    var arr = [];
    var val;
    for (var _a = 0, num_1 = num; _a < num_1.length; _a++) {
        var i_1 = num_1[_a];
        var flag = 0;
        for (var j = 2; j < i_1; j++) {
            if (i_1 % j == 0) {
                flag = 1;
                break;
            }
        }
        if (i_1 > 1 && flag == 0) {
            arr.push(i_1);
        }
    }
    var maxi = Number.MIN_SAFE_INTEGER;
    for (var i = 0; i < arr.length; i++) {
        maxi = Math.max(maxi, arr[i]);
    }
    console.log(maxi);
}
x(29, 101, 113, 17);
