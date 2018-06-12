"use strict";

function min_way(str_1, str_2){

    if (str_1.length != str_2.length)
        return -1;

    outer: for (var k = 0; k < str_1.length; ++k) {
        var j = 0;
        for (var i = k; i < str_1.length + k, j < str_2.length; ++i, ++j) {
            if (str_1[i % str_1.length] != str_2[j]) {
                continue outer;
            }
        }
        return k;
    }
    return -1;
}


var str_1 = process.argv[2];
var str_2 = process.argv[3];

console.log(min_way(str_1, str_2));

