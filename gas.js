/*Name: Basan Emenov Date: 04/13/2026 */

// STEP 1: GLOBAL VARIABLES
let entryCount = 0;
let totalGas = 0;

// STEP 2: ASK USER FOR NAME
let username = prompt("Enter your name:");

// STEP 3: VALIDATE NAME
if (username === null) {
    alert("You cancelled the name prompt.");
}
else if (username.trim() === "") {
    alert("You must type a name.");
}
else {
    // STEP 4: CALL FUNCTION
    let average = calcGasAvg();

    // STEP 5: CHECK IF USER CANCELLED GAS ENTRY
    if (average === null) {
        alert("You cancelled entering gas totals.");
    }
    else {
        let message;

        // STEP 6: DISPLAY MAIN RESULT
        if (entryCount === 0) {
            alert("No gas totals were entered.");
        }
        else if (entryCount === 1) {
            message = username + "'s gas total is $" + totalGas.toFixed(2);
            alert(message);
        }
        else {
            message = username + "'s average weekly gas bill is $" + average.toFixed(2);
            alert(message);
        }

        // STEP 7: DISPLAY HOW MANY ENTRIES
        let entryMessage;

        if (entryCount === 0) {
            entryMessage = "No gas totals were entered.";
        }
        else if (entryCount === 1) {
            entryMessage = "You entered 1 gas total.";
        }
        else {
            entryMessage = "You entered " + entryCount + " gas totals.";
        }

        alert(entryMessage);
    }
}

// STEP 8: FUNCTION
function calcGasAvg() {
    // first prompt
    let input = prompt("Enter your first week's gas total. Enter -1 when done.");

    if (input === null) {
        return null;
    }

    let weeklyGas = parseFloat(input);

    // loop until user types -1
    while (weeklyGas !== -1) {

        // validate number
        if (isNaN(weeklyGas)) {
            alert("Please enter a valid number.");

            input = prompt("Enter your gas total again:");

            if (input === null) {
                return null;
            }

            weeklyGas = parseFloat(input);
        }
        else {
            totalGas += weeklyGas;
            entryCount++;

            input = prompt("Enter your next week's gas total. Enter -1 when done.");

            if (input === null) {
                return null;
            }

            weeklyGas = parseFloat(input);
        }
    }

    if (entryCount > 0) {
        return totalGas / entryCount;
    }
    else {
        return 0;
    }
}