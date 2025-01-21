/*******************************************
    Iteration 1.1 | Tongue Twister
*******************************************/
const s1 = "Fred";
const s2 = "fed";
const s3 = "Ted";
const s4 = "bread";
const s5 = "and";

// Concatenate the string variables into one new string
const tongueTwister = s1 + " " + s2 + " " + s3 + " " + s4 + " " + s5 + " " + s3 + " " + s2 + " " + s1 + " " + s4;

// Print out the concatenated string
console.log(tongueTwister);

/*******************************************
    Iteration 1.2 | Camel Tail
*******************************************/
const part1 = "java";
const part2 = "script";

// Convert the last letter of part1 and part2 to uppercase and concatenate the strings
const result =
part1.slice(0, -1) + part1.slice(-1).toUpperCase() + part2.slice(0, -1) + part2.slice(-1).toUpperCase();

// Print the cameLtaiL-formatted string
console.log(result);



/*******************************************
    Iteration 2.1 | Calculate Tip
*******************************************/
const billTotal = 84;

// Calculate the tip (15% of the bill total)
const tip = billTotal * 0.15;
const total = tip + billTotal;

// Print out the tipAmount
console.log(total);



/*******************************************
    Iteration 2.2 | Generate Random Number
*******************************************/

// Generate a random integer between 1 and 10 (inclusive)
const random = Math.floor(Math.random() * 10) + 1;

// Print the generated random number
console.log(random);


/*******************************************
    Iteration 3.1 | Booleans
*******************************************/

const a = true;
const b = false;

// Try and guess the output of the below expressions first and write your answers down:
const expression1 = a && b;
//  false
//  Why? Because && operators only return true if both options are true.
//  So... 
//  ...a (true) AND b (false) = false

const expression2 = a || b;
//  true - 
//  Why? Because || operators only return true if one of the options is true.
//  So...
//  ...a (true) OR b (false) = true

const expression3 = !a && b;
//  false
//  Why? (i) Because the exclamation mark negates 'a (true)', which makes it false. (ii) && operators only return true if both are true
//  So...
//  ...a (*now* false) AND b (false) = false

const expression4 = !(a && b);
//  true 
//  Why? (i) PEMDAS: (1) Parentheses, (2) Exponentiation, (3) Multiplication, (4) Division, (5) Addition, (6) Subtraction. 
//  Meaning 'a && b' first, which is 'false'
//  (ii) 'false' gets negated by the exlclamation mark
//  So...
//  ...it becomes 'true'

const expression5 = !a || !b;
//  true
//  Why? Whilst 'a - true' gets negated to false, 'b - false' gets negated to true, and given that || operators return true when one of the options is true, it means...
// ... a (*now* false)  OR b (*now* true) = true

const expression6 = !(a || b);
//  false
//  Why? (i) PEMDAS: (1) Parentheses, (2) Exponentiation, (3) Multiplication, (4) Division, (5) Addition, (6) Subtraction. 
//  Meaning 'a || b' first, which is 'true'
//  (ii) 'true' gets negated by the exlclamation mark
//  So...
//  ...it becomes 'false'

const expression7 = a && a;
//  true
//  Why? Because && operators only return true if both options are true.
//  So... 
//  ...a (true) AND a (true) = true