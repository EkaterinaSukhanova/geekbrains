"use strict";

function min_way(str_1, str_2){

    if (str_1.length != str_2.length)
        return -1;

    // let b = str_1.length + 1;

    outer: for (let k = 0; k < str_1.length; ++k) {
        // b -= 1;
        let j = 0;
        for (let i = k; i < str_1.length + k, j < str_2.length; ++i, ++j) {
            if (str_1[i % str_1.length] != str_2[j]) {
                continue outer;
            }
        }

        let b = str_1.length - k;
        if (k < b) {
            return k;
        }
        else {
            return b;
        }
    }

    return -1;
}

let str_1 = process.argv[2];
let str_2 = process.argv[3];

console.log(min_way(str_1, str_2));
