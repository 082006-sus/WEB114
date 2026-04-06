"use strict";

// Basan Emenov
// Date: April 6th

let totalCrates = 0;

for (let crate = 1; crate <= 20; crate++) {

    if (crate % 5 === 0) {
        console.log("Crate " + crate + ": Handle with care");
    } 
    else if (crate % 2 === 0) {
        console.log("Crate " + crate + ": Load crate");
    } 
    else {
        console.log("Crate " + crate + ": Inspect crate");
    }

    totalCrates++;
}

console.log("Total crates scanned: " + totalCrates);