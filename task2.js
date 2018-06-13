"use strict";

function min_offset(str_1, str_2) {

    if (str_1.length !== str_2.length) {
        return -1;
    }

    for (let right_offset = 0; right_offset < str_1.length; ++right_offset) {

        let str_to_compare = str_1.slice(right_offset, str_1.length) + str_1.slice(0, right_offset);
        if (str_2.localeCompare(str_to_compare) !== 0) {
            continue;
        }

        let left_offset = str_1.length - right_offset;

        return right_offset < left_offset ? right_offset : left_offset;
    }
    return -1;
}

let str_1 = process.argv[2];
let str_2 = process.argv[3];

console.log(min_offset(str_1, str_2));
