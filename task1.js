"use strict";

let input_text = process.argv[2];
let replaced_text = input_text.replace(/[РрНнКк]/g,'');

console.log(replaced_text);
