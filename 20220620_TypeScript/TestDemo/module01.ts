function addNumbers(x:number, y:number){
    return x+y;
}


let x:number;
let y=1;
const z = 3;
console.log(addNumbers(y,z));


let firstName: string = "Mateo";
let sentence: string = `My name is ${firstName}.
    I am new to TypeScript.`;
console.log(sentence);


enum ContractStatus {
    Permanent="test",
    Temp=10,
    Apprentice=15
}

let employeeStatus: ContractStatus = ContractStatus.Permanent;
console.log(employeeStatus);




let randomValue: unknown = 10;

randomValue = true;
//randomValue = 'Mateo';

if (typeof randomValue === "string") {
    console.log((randomValue as string).toUpperCase());    //* Returns MATEO to the console.
} else {
    console.log("Error - A string was expected here.");    //* Returns an error message.
}
