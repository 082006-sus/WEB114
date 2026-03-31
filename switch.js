// Basan Emenov | March 30th 2026

let favMonth = prompt("Enter your favorite month:");

// convert to lowercase
favMonth = favMonth.toLowerCase();

switch(favMonth) {

    // SPRING
    case "march":
    case "april":
    case "may":
        console.log("Spring is nice with everything blooming.");
        break;

    // SUMMER
    case "june":
    case "july":
    case "august":
        console.log("You enjoy the summer months!");
        break;

    // FALL
    case "september":
    case "october":
    case "november":
        console.log("Fall is fun with all of the pretty colors.");
        break;

    // WINTER
    case "december":
    case "january":
    case "february":
        console.log("You love the winter months!");
        break;

    // OTHER
    default:
        console.log("Other months are interesting too!");
}