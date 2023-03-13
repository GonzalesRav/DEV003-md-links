#!/usr/bin/env node

const inputArray = process.argv;
const i2 = inputArray[2];

function log (input) {
    if (input.length === 3) { console.log(input[2])
} else if (input.length === 5) {console.log(input[3], input[4])
} else if (input[3] === "--v" || input[3] === "--s") {console.log(input[3])
} else console.log("Por favor introduzca los datos necesarios")}




