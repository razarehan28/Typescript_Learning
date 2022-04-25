"use strict";
exports.__esModule = true;
var student_1 = require("./student");
//Function
// function Multiply(p1: number, p2: number): number {
//   return p1 * p2;
// }
// console.log("Multiply : ", Multiply(4, 3));
// // 2nd example
// function add(): number {
//   return 20 + 20; // if i will put string value it will give error because we have declare number.
// }
// console.log(add());
// // // when we are doing for string type
// let fName = (): string => {
//   return "Rehan";
// };
// console.log(fName());
// // Optional Parameters
// let person_Details = (id: number, name: string, email_id?: string) => {
//   console.log("ID:" + id);
//   console.log("Name:" + name);
//   if (email_id != undefined) {
//     console.log("EMAIL_ID:" + email_id);
//   }
// };
// let company_details = (id: number, name: string, email_id?: string) => {
//   console.log("ID:" + id);
//   console.log("Name:" + name);
//   if (email_id != undefined) {
//     console.log("EMAIL_ID:" + email_id);
//   }
// };
// company_details(123, "Rehan Raza");
// company_details(245, "Simform Solutions", "simform@xyz.com");
// // Rest Parameters
// let getNumber = (...numbs: number[]) => {
//   numbs.forEach((element) => {
//     console.log("Numbers :" + element);
//   });
// };
// getNumber(1, 2, 3, 4, 5, 6);
// // Addition with Rest parameter
// let addNumbers = (...numbs: number[]) => {
//   let i;
//   let sum: number = 0;
//   for (i = 0; i < numbs.length; i++) {
//     sum = sum + numbs[i];
//   }
//   console.log("sum of the numbers is:" + sum);
// };
// addNumbers(1, 2, 3); // 6
// addNumbers(10, 10, 10, 10, 10, 10); // 60
// // Default Parameters
// let cal_discount = (price: number, rate: number = 2.5) => {
//   let discount = price * rate;
//   console.log("Discount amount :" + discount);
// };
// cal_discount(1000); //2500
// cal_discount(1000, 0.3); // default value of rate is overwritten and is set to the value explicitly passed.
// //Anonymous Function
// let msg = () => {
//   console.log("Hello world");
// };
// console.log(msg()); // Hello world
// //Anonymous function with parameters
// let res = function (x: number, y: number) {
//   return x / y;
// };
// console.log(res(12, 2));
// // In case of string in Anonymous Function
// let studentName = function (lName: string, fName: string): string {
//   return lName + fName;
// };
// console.log(studentName("Raza", "Rehan"));
// // Function constructor
// let myFunc = new Function("a", "b", "return a*b");
// let a = myFunc(4, 12);
// console.log(a);
// // Lambda Functions
// let digit = (x: number) => 10 + x;
// console.log(digit(100));
// // // Lambda Statement
// let digit1 = (x: number) => {
//   x = 10 + x;
//   console.log(x);
// };
// digit1(100);
// // Interfaces in Typescript
// interface userType {
//   fname: string;
//   age: number;
//   sayHi: () => string;
// }
// //using the interface
// let users: userType = {
//   fname: "Rehan",
//   age: 23,
//   sayHi: () => {
//     return "Hi";
//   },
// };
// console.log(users);
// //Interface and Objects
// interface IPerson {
//   firstName: string;
//   lastName: string;
//   established: number;
//   sayHello: () => string;
// }
// let customer: IPerson = {
//   firstName: "Simform",
//   lastName: "Solutions",
//   established: 2010,
//   sayHello: () => {
//     return "Hi there";
//   },
// };
// console.log(customer);
// let student: IPerson = {
//   firstName: "Jim",
//   lastName: "Blakes",
//   established: 2010,
//   sayHello: () => {
//     return "Hello!!!";
//   },
// };
// console.log(student);
// // // Interface of array type
// interface NumList {
//   [index: number]: number;
// }
// let numArr: NumList = [1, 2, 3];
// numArr[0];
// numArr[1];
// console.log(numArr);
// interface IStringList {
//   [index: string]: string;
// }
// let strArr: IStringList = {};
// strArr["TS"] = "TypeScript";
// strArr["JS"] = "JavaScript";
// console.log(strArr);
// // Interfaces and Arrays
// interface nameList {
//   [index: number]: string;
// }
// let list2 = ["Rehan", 23, "Simform"];
// interface ages {
//   [index: string]: number;
// }
// console.log(list2);
// // Classes in Typescript
// // Creating classes
// class Students {
//   //field
//   fName: string;
//   lName: string;
//   //constructor
//   constructor(fName: string, lName: string) {
//     this.fName = fName;
//     this.lName = lName;
//   }
//   //function
//   GetFullName(): string {
//     return this.fName + "..." + this.lName;
//   }
// }
var s = new student_1["default"]("Rehan", "Raza"); // creating a object
console.log("Reading attribute value Students as :  " + s.fName); // access the field
console.log(s.GetFullName()); // access the function
// Class Inheritance in Typescript
// class shape {
//   Area: number;
//   constructor(Area: number) {
//     this.Area = Area;
//   }
// }
// class circle extends shape {
//   GetShapeValue(): void {
//     console.log("Area of the circle:  " + this.Area);
//   }
// }
// let z = new circle(223);
// z.GetShapeValue();
// // MultiLevel Inheritance in Typescript
// class Root {
//   str: string | undefined;
// }
// class child extends Root {}
// class leaf extends child {}
// let obj = new leaf();
// obj.str = "Hello world";
// console.log(obj.str);
// // Interfaces in classes
// interface ILoan {
//   interest: number;
// }
// class AgreeLoan implements ILoan {
//   interest: number;
//   rebate: number;
//   constructor(interest: number, rebate: number) {
//     this.interest = interest;
//     this.rebate = rebate;
//   }
// }
// let obj1 = new AgreeLoan(10, 1);
// console.log("Interest is : " + obj1.interest + " Rebate is : " + obj1.rebate);
// // Generics in Typescript
// function user1<T>(data: T): T {
//   return data;
// }
// console.log(typeof user1);
// console.log(user1(1));
// console.log(user1("Rehan")); // It will take all type of data type
// // Generic Function
// function getArray<T>(items: T[]): T[] {
//   return new Array<T>().concat(items);
// }
// let myNumArr = getArray<number>([100, 200, 300]);
// let myStrArr = getArray<string>(["Hello", "World"]);
// myNumArr.push(400); // 400
// myStrArr.push("Hello TypeScript"); // Hello typescript
// // myNumArr.push("Hi"); // Compiler Error
// // myStrArr.push(500); // Compiler Error
// // Multiple Type Variables in Generics
// function displayType1<T, U, X>(id: T, name: U, employee: X): void {
//   console.log(typeof id + ", " + typeof name + "," + typeof employee);
// }
// displayType1<number, string, boolean>(1, "Steve", true); // number, string
// // Generic Array Methods
// function displayNames<T>(names: T[]): void {
//   console.log(names.join(", "));
// }
// displayNames<string>(["Rehan", "Raza"]); // Rehan, Raza
// // Generic Interface
// interface KeyPair<T, U> {
//   name: T;
//   value: U;
// }
// let keyvalue1: KeyPair<string, number> = { name: "Rehan", value: 12345 }; // OK
// let keyvalue2: KeyPair<number, number> = { name: 1, value: 345526 }; // OK
// // Generic Class in Typescript
// class KeyValuePair<T, U> {
//   key: T | undefined;
//   val: U | undefined;
//   setKeyValue(key: T, val: U): void {
//     this.key = key;
//     this.val = val;
//   }
//   display(): void {
//     console.log(`Key = ${this.key}, val = ${this.val}`);
//   }
// }
// let keyvaluepair1 = new KeyValuePair<number, string>();
// keyvaluepair1.setKeyValue(1, "Simform");
// keyvaluepair1.display(); //Output: Key = 1, Val = Simform
// let keyvaluepair2 = new KeyValuePair<string, string>();
// keyvaluepair2.setKeyValue("solutions", "Raza");
// keyvaluepair2.display(); //Output: Key = solutions, Val = Raza
// // Type Assertion
