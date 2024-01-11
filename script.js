// Declare and initialize all variables.
var Fname = "";
const piValue = 3.1415926;
var myFavNum = 25, myArea = 0;


// Get user first name then store the value in fName.
Fname = prompt("Please enter your first name: ");

// Get users favorite number and store that value in myFavNum. Then calculate a circle's radius using that number.
myFavNum = prompt("Please enter your favorite number: ");
myArea = piValue * myFavNum ** 2;

// Display the contents of each variable.
document.write("Hello " +Fname, ", you entered " + myFavNum + " as your favorite number.");
document.write(" If that was the radius of a circle, the circle’s area would be " + myArea);