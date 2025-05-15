// global - immediate actions spread across variables
// local - events contained inside functions

// variables:
/// let - can change variable
/// const - cannot change variable
let userName = "Sara";
console.log(userName);
userName = "Sarah";
console.log(userName);

let userAge = 27;
console.log(userAge);

let userPresent = true;
console.log(userPresent);

const firstName = "Sara";
const lastName = "Myrheim";

// variable chaining
/// var varName = otherVar + anotherVar;
const fullName = firstName + " " + lastName;
console.log(fullName);

// template literal
/// var varName = `${otherVar} ${anotherVar}`;
const wholeName = `${firstName} ${lastName}<3`;
console.log(wholeName);

// functions:
function businessCard() {
  const firstName = "Oskar";
  console.log(firstName);
  const lastName = "Jahr";
  const fullName = `${firstName} ${lastName}`;
  console.log(fullName);
}
businessCard();

//

function myFunction() {
  document.getElementById("demo").innerHTML = "Yes it does!";
}