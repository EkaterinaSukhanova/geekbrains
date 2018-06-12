
var num_1 = process.argv[2];
var num_2 = process.argv[3];

while (num_1 > 0 && num_2 > 0){
    if(num_1 > num_2){
        num_1 = num_1 % num_2;
    }
    else{
        num_2 = num_2 % num_1;
    }
}

console.log(num_1 + num_2);
