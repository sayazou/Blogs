"use strict";
function addNumbers(x, y) {
    return x + y;
}
let x;
let y = 1;
const z = 3;
console.log(addNumbers(y, z));
let firstName = "Mateo";
let sentence = `My name is ${firstName}.
    I am new to TypeScript.`;
console.log(sentence);
var ContractStatus;
(function (ContractStatus) {
    ContractStatus["Permanent"] = "test";
    ContractStatus[ContractStatus["Temp"] = 10] = "Temp";
    ContractStatus[ContractStatus["Apprentice"] = 15] = "Apprentice";
})(ContractStatus || (ContractStatus = {}));
let employeeStatus = ContractStatus.Permanent;
console.log(employeeStatus);
let randomValue = 10;
randomValue = true;
//randomValue = 'Mateo';
if (typeof randomValue === "string") {
    console.log(randomValue.toUpperCase()); //* Returns MATEO to the console.
}
else {
    console.log("Error - A string was expected here."); //* Returns an error message.
}
