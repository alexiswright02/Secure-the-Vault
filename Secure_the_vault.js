/*
For each variable I create, I will determine or remember:
1. The data type of the variable (string vs number)
2. Which keyword to use declare the variable (let vs const)
3. Identifier/name
4. Which operator to use for the values (assignment vs arithmetic)
5. Value or expression including values, variables, and operators to produce a value (ex: =5; vs =x+y;)
6. Remember to separate statements/code with a semicolon to ensure they are executable
 */

/*
General steps for entire process:
1. For the numbers I will be using in the arithmetic operators: 
Declare variable as const, name each variable the word of the number being used (number), use = to assign the values as the numeral form (#)
2. For the first half of the displayed message: 
Declare variable as const, enter name as message, use = to assign the value as the direct quote
3. To combine the separate equations (each with a different operator(+-*)) to form 3 numbers in a combination:
Declare variable as const, enter name as comb, use = to assign expression, use template literals and string interpolation to insert 3 separate arithmetic operators into the string
4. To combine the first half of the message with the combination:
Declare variable as const, enter name as compMessage, use = to assign expression, use template literals and string interpolation to combine variables message and comb
5. Test the current code with console.log(compMessage) to ensure the message appears in debug
6. Create a popup alert box that should display the complete message 
7. I want the message to appear on the webpage, not only popup, so I will make it an H1 header and link the .js file in the body of the .html file rather than the head
*/

//number variables used for equations
const two = 2;
const three = 3;
const five = 5;
const eight = 8;
const thirteen = 13;
const fifty = 50;
//string variable for first half of displayed message
const message =
  "You have received this message because you have been chosen to open an important vault. Here is the secret combination:";
//string variable utilizing template literals for 3 equations to form combination
const comb = `${eight + two} - ${fifty - five} - ${thirteen * three}`;
//string variable utilizing template literals to combine message + combination
const compMessage = `${message} ${comb}`;
//testing in debug
console.log(compMessage);
//creating popup alert for full message
alert(compMessage);
//displaying completed message on html webpage
document.body.innerHTML = "<h1>" + compMessage + "</h1>";
