// varaibles in Typescript
var fname = "Rehan";
var score1 = 90;
var score2 = 60;
var sum = score1 + score2;
console.log("sum of score is " + sum);
console.log("name " + fname);
console.log("first score " + score1);
console.log("second score " + score2);
//Type Assertion
var str = "1";
var str2 = str;
console.log(typeof str);
// operators in Typescript
var x = 8;
var y = -4;
console.log("value of x " + x);
console.log("value of y " + y);
// Concatenation operator
var message = "Rehan " + "Raza";
console.log("The message is " + message);
// Conditional Operator
var num = -2;
var result = num > 0 ? "positive" : "non-positive";
console.log(result); // non-positive
// typeof operator
var num1 = 12;
console.log(typeof num1); // number
// typeof operator for string
var company = "simform";
console.log(typeof company);
// looping in typescript
// for loop
var i = 5;
for (i = 0; i < 5; i++) {
  console.log(i);
}
// do/while loop
var n = 6;
while (n > 6) {
  console.log("Entered while");
}
do {
  console.log("Entered do while");
} while (n > 6);
// Break statement
var b = 1;
while (i <= 10) {
  if (i % 5 === 0) {
    console.log("The first multiple of 5  between 1 and 10 is : " + i);
    break; //exit the loop if the first multiple is found
  }
  i++;
} // output : 5
// Continue statement
var num2 = 0;
var count = 0;
for (num2 = 0; num2 <= 20; num2++) {
  if (num2 % 2 === 0) {
    continue;
  }
  count++;
}
console.log(" The count of odd values between 0 and 20 is: " + count); // output : 10
// String in TypeScript
// String length
var userName = new String("Hello world");
console.log("length:" + userName.length); // length:11
// string Prototype
function employee(id, name) {
  this.id = id;
  this.name = name;
}
var emp = new employee(123, "Rehan");
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
var str11 = new String("This is string one");
var index = str11.indexOf("string");
console.log("indexOf found String :" + index);
// Array in Typescript
var arr = ["Rehan", "Raza", "simform"];
console.log(arr[0]);
console.log(arr[2]);
// Single statement declaration and initialization
var age = [12, 54, 32, 43];
console.log(age[0]);
console.log(age[1]);
console.log(age[3]);
//Array Object
var arr_Names = new Array(4);
for (var i_1 = 0; i_1 < arr_Names.length; i_1++) {
  arr_Names[i_1] = i_1 * 2;
  console.log(arr_Names[i_1]); // 0,2,4,6
}
//Array Constructor accepts comma separated values
var names = new Array("Rehan", "Anirudh", "Rutvi", "Harsh");
for (var i_2 = 0; i_2 < names.length; i_2++) {
  console.log(names[i_2]);
}
// Array methods
// ForEach() method
var d = [7, 8, 9];
d.forEach(function (value) {
  console.log(value);
});
// Join() method
var array = new Array("First", "second", "third");
var strng = array.join("+");
console.log("str :" + strng);
// Map() method
var numbers = [1, 4, 9, 10];
var root = numbers.map(Math.sqrt);
console.log("square root is :" + root);
// push() method in typescript
var e = [12, 23, 54];
e.pop();
console.log(e);
// pop() method in typescript
var digits = ["Simform"];
digits.push("solutions");
console.log(digits);
// Array Destructuring
var arr1 = [12, 32, 17];
var p = arr1[0],
  q = arr1[1],
  r = arr1[2];
console.log(p);
console.log(q);
console.log(r);
// Array Traversal using for in loop
var j;
var nums = [1001, 1002, 1003, 1004];
for (j in nums) {
  console.log(nums[j]);
}
// Tuple in Typescript
var tuple = [1, "Rehan", true];
console.log(tuple[0]); // 1
console.log(tuple[1]); // rehan
console.log(tuple[2]); //true
// tuple type variable can include multiple data types
var employe = [2, "Rehan"];
var person;
person = [1, "simform", true];
var user; // declare tuple variable
user = [3, "rohan", false, 5, "suresh"]; // initialize tuple variable
console.log(employe);
console.log(person);
console.log(user);
// we can declare an array of tuple also
var emp1;
emp1 = [
  [1, "Rehan"],
  [2, "Raza"],
  [3, "Simform"],
];
console.log(emp1);
// Add Elements into Tuple
var addition = [34, "Hello", true];
addition.push(23, "world", true);
console.log(addition);
// Updating Tuples
var update = [56, "Ram", "Rakesh", true];
console.log("Tuple value at index 0 :" + update[0]);
update[0] = 125;
console.log("Tuple value at index 0 changed to :" + update[0]);
// Union in typescript
var code;
code = 123;
console.log(code);
code = "ABC";
console.log(code);
var empId;
empId = 111;
empId = "E111";
// empId = true; // Here it will give error because we have not declared a boolean type with variable
console.log(empId);
// Function Parameter as Union Type
function displayType(code) {
  if (typeof code === "number") {
    console.log("code is a number");
  } else if (typeof code === "string") {
    console.log("code is string");
  }
}
displayType(123); // Output: Code is number.
displayType("ABC"); // Output: Code is string.
// void Datatype
function sayHi() {
  console.log("Hi!");
}
var speech = sayHi();
console.log(speech); //Output: undefined
