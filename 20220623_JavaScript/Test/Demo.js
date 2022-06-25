//0
const place = "World";
const userName = "Saya";

console.log("Hello %s, My name is " + userName, place);
console.log("Hello %s, My name is %s", place, userName);
console.log(`Hello ${place}, my name is ${userName}.`);

//0.1
//var
console.log(hello);
var hello = "Hello";

//let
if(true){
    let world = "this is a let world."
    console.log(world);
}


//0.2
//operator for string
let str1 = "Hello";
let str2 = "Saya";
console.log(str1 + str2);
console.log(str1 + "!, " + str2);

let num1 = 1;
let num2 = "1";
console.log(num1+num2);
console.log(num1 +1);

let str3 = "JavaScript";
let str4 = "fun";
console.log(`I am writing code in ${str3}`);
console.log(`Formatting in ${str3} is ${str4}`);

let bool1 = true;
console.log(`1+1 is ${1+1}`);
console.log(`The opposite of true is ${!bool1}`);

//0.3
const people = ["Saya", "Aaron", "Mel", "John"];
const one =1;
const two = new Number(2);
const str ="Hello World";
const testStr = new String("This is a string");
const b= true;
const person = {
    firstName: "Saya",
    lastName: "Zou",
}

function sayHello(person){
    console.log("Hello " + person.firstName);
}

console.log("------ typeof -----");
console.log(typeof people);
console.log(typeof one);
console.log(typeof two);
console.log(typeof str);
console.log(typeof testStr);
console.log(typeof b);
console.log(typeof person);
console.log(typeof sayHello);

console.log("------ instanceof -----");
console.log(people instanceof Array);
console.log(one instanceof Number);
console.log(two instanceof Number);
console.log(str instanceof String);
console.log(testStr instanceof String);
console.log(b instanceof Boolean);
console.log(person instanceof Object);
console.log(sayHello instanceof Function);

//0.4
let num3 = 100;
let num4 = num3++;

let num5 = 100;
let num6 = ++num5;
console.log(num3);
console.log(num4);
console.log(num5);
console.log(num6);

let num7 = num4+=1;
console.log(num4);
console.log(num7);

//0.4
const now = new Date();
console.log(now);

const date1 = new Date(2022, 3, 12, 19, 40);
console.log(date1);

//change
date1.setMonth(7);
console.log(date1);
console.log(`Day of week:${date1.getDay()} `);
console.log(`Day in the Month:${date1.getDate()} `);

//0.5
const status = 200;
const message1 = (status === 200) ? "Ok":"Error";
console.log(message1);

// switch...case的三个规则：
// （1）既无成功匹配，又无default子句，那么swtich语句块什么也不做；
// （2）无成功匹配，但有default，那么swtich语句块做default语句块的事；
// （3）有成功匹配，没有break，那么成功匹配后，一直执行，直到遇到break。
switch(status){
    case 200:
        console.log("Ok");
    case 400:
    case 500:
        console.log("Error");
    default:
        console.log("Unknown Status");
}

//0.6
let arr1 = [];
let arr2 = Array(4);
console.log(arr1.length);
console.log(arr2.length);

let arr3 = ["A", true, 2];
console.log(arr3[1]);

console.log(arr3.push("New value"));
console.log(arr3);
console.log(arr3.pop("New value"));
console.log(arr3);

console.log(arr3.shift("New value"));
console.log(arr3);
console.log(arr3.unshift("New value"));
console.log(arr3);

let arr4 = ["a",2].concat(arr3);
console.log(arr4);

//向数组中间参加元素
//借用splice方法
let arr5 = ["insert value","test"];
arr4.splice(1,0, "a new value")
arr4.splice(2,0, ...arr5);
console.log(arr4);
