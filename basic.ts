// varaibles in Typescript
let fname: string = "Rehan";
let score1: number = 90;
let score2: number = 60;
let sum = score1 + score2;
console.log("sum of score is " + sum);
console.log("name " + fname);
console.log("first score " + score1);
console.log("second score " + score2);
//Type Assertion
let str = "1";
let str2: number = <number>(<any>str);
console.log(typeof str);
// operators in Typescript
let x: number = 8;
let y: number = -4;
console.log("value of x " + x);
console.log("value of y " + y);
// Concatenation operator
let message: string = "Rehan " + "Raza";
console.log("The message is " + message);
// Conditional Operator
let num: number = -2;
let result: string = num > 0 ? "positive" : "non-positive";
console.log(result); // non-positive
// typeof operator
let num1 = 12;
console.log(typeof num1); // number
// typeof operator for string
let company = "simform";
console.log(typeof company);
// looping in typescript
// for loop
let i: number = 5;
for (i = 0; i < 5; i++) {
  console.log(i);
}
// do/while loop
let n: number = 6;
while (n > 6) {
  console.log("Entered while");
}
do {
  console.log("Entered do while");
} while (n > 6);
// Break statement
let b: number = 1;
while (i <= 10) {
  if (i % 5 === 0) {
    console.log("The first multiple of 5  between 1 and 10 is : " + i);
    break; //exit the loop if the first multiple is found
  }
  i++;
} // output : 5
// Continue statement
let num2: number = 0;
let count: number = 0;
for (num2 = 0; num2 <= 20; num2++) {
  if (num2 % 2 === 0) {
    continue;
  }
  count++;
}
console.log(" The count of odd values between 0 and 20 is: " + count); // output : 10
// String in TypeScript
// String length
let userName = new String("Hello world");
console.log("length:" + userName.length); // length:11
// string Prototype
function employee(this: any, id: number, name: string) {
  this.id = id;
  this.name = name;
}
let emp = new (employee as any)(123, "Rehan");
employee.prototype.email = "raza@xyz.com";
console.log("Employee 's ID:" + emp.id);
console.log("Employee 's Name:" + emp.name);
console.log("Employee 's EmailId:" + emp.email);
// string concat()
var str1 = new String("This is string one");
var str22 = new String("This is string two");
var str3 = str1.concat(str22.toString());
console.log(str3);
// string indexOf()
let str11 = new String("This is string one");
let index = str11.indexOf("string");
console.log("indexOf found String :" + index);
// Array in Typescript
let arr: string[] = ["Rehan", "Raza", "simform"];
console.log(arr[0]);
console.log(arr[2]);
// Single statement declaration and initialization
let age: number[] = [12, 54, 32, 43];
console.log(age[0]);
console.log(age[1]);
console.log(age[3]);
//Array Object
let arr_Names: number[] = new Array(4);
for (let i = 0; i < arr_Names.length; i++) {
  arr_Names[i] = i * 2;
  console.log(arr_Names[i]); // 0,2,4,6
}
//Array Constructor accepts comma separated values
let names: string[] = new Array("Rehan", "Anirudh", "Rutvi", "Harsh");
for (let i = 0; i < names.length; i++) {
  console.log(names[i]);
}
// Array methods
// ForEach() method
let d: Array<number> = [7, 8, 9];
d.forEach(function (value) {
  console.log(value);
});
// Join() method
let array: string[] = new Array("First", "second", "third");
let strng: string = array.join("+");
console.log("str :" + strng);
// Map() method
let numbers: number[] = [1, 4, 9, 10];
let root = numbers.map(Math.sqrt);
console.log("square root is :" + root);
// push() method in typescript
let e: number[] = [12, 23, 54];
e.pop();
console.log(e);
// pop() method in typescript
let digits: string[] = ["Simform"];
digits.push("solutions");
console.log(digits);
// Array Destructuring
let arr1: number[] = [12, 32, 17];
let [p, q, r] = arr1;
console.log(p);
console.log(q);
console.log(r);
// Array Traversal using for in loop
let j: any;
let nums: number[] = [1001, 1002, 1003, 1004];
for (j in nums) {
  console.log(nums[j]);
}
// Tuple in Typescript
let tuple: [number, string, boolean] = [1, "Rehan", true];
console.log(tuple[0]); // 1
console.log(tuple[1]); // rehan
console.log(tuple[2]); //true
// tuple type variable can include multiple data types
let employe: [number, string] = [2, "Rehan"];
let person: [number, string, boolean];
person = [1, "simform", true];
let user: [number, string, boolean, number, string]; // declare tuple variable
user = [3, "rohan", false, 5, "suresh"]; // initialize tuple variable
console.log(employe);
console.log(person);
console.log(user);
// we can declare an array of tuple also
let emp1: [number, string][];
emp1 = [
  [1, "Rehan"],
  [2, "Raza"],
  [3, "Simform"],
];
console.log(emp1);
// Add Elements into Tuple
let addition: [number, string, boolean] = [34, "Hello", true];
addition.push(23, "world", true);
console.log(addition);
// Updating Tuples
let update: [number, string, string, boolean] = [56, "Ram", "Rakesh", true];
console.log("Tuple value at index 0 :" + update[0]);
update[0] = 125;
console.log("Tuple value at index 0 changed to :" + update[0]);
// Union in typescript
let code: string | number;
code = 123;
console.log(code);
code = "ABC";
console.log(code);
let empId: string | number;
empId = 111;
empId = "E111";
// empId = true; // Here it will give error because we have not declared a boolean type with variable
console.log(empId);
// Function Parameter as Union Type
function displayType(code: string | number) {
  if (typeof code === "number") {
    console.log("code is a number");
  } else if (typeof code === "string") {
    console.log("code is string");
  }
}
displayType(123); // Output: Code is number.
displayType("ABC"); // Output: Code is string.
// void Datatype
function sayHi(): void {
  console.log("Hi!");
}
let speech: void = sayHi();
console.log(speech); //Output: undefined
