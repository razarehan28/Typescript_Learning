//Function
function Multiply(p1: number, p2: number): number {
  return p1 * p2;
}
console.log(Multiply(4, 3));
// 2nd example
function add(): number {
  return 20 + 20; // if i will put string value it will give error because we have declare number.
}
console.log(add());
// when we are doing for string type
let fName = (): string => {
  return "Rehan";
};
console.log(fName());
// Optional Parameters
let person_Details = (id: number, name: string, email_id?: string) => {
  console.log("ID:" + id);
  console.log("Name:" + name);
  if (email_id != undefined) {
    console.log("EMAIL_ID:" + email_id);
  }
};
let company_details = (id: number, name: string, email_id?: string) => {
  console.log("ID:" + id);
  console.log("Name:" + name);
  if (email_id != undefined) {
    console.log("EMAIL_ID:" + email_id);
  }
};
company_details(123, "Rehan Raza");
company_details(245, "Simform Solutions", "simform@xyz.com");
// Rest Parameters
let getNumber = (...numbs: number[]) => {
  numbs.forEach((element) => {
    console.log("Numbers :" + element);
  });
};
getNumber(1, 2, 3, 4, 5, 6);
// Addition with Rest parameter
let addNumbers = (...numbs: number[]) => {
  let i;
  let sum: number = 0;
  for (i = 0; i < numbs.length; i++) {
    sum = sum + numbs[i];
  }
  console.log("sum of the numbers is:" + sum);
};
addNumbers(1, 2, 3); // 6
addNumbers(10, 10, 10, 10, 10, 10); // 60
// Default Parameters
let cal_discount = (price: number, rate: number = 2.5) => {
  let discount = price * rate;
  console.log("Discount amount :" + discount);
};
cal_discount(1000); //2500
cal_discount(1000, 0.3); // default value of rate is overwritten and is set to the value explicitly passed.
//Anonymous Function
let msg = () => {
  console.log("Hello world");
};
console.log(msg()); // Hello world
//Anonymous function with parameters
let res = function (x: number, y: number) {
  return x / y;
};
console.log(res(12, 2));
// In case of string in Anonymous Function
let studentName = function (lName: string, fName: string): string {
  return lName + fName;
};
console.log(studentName("Raza", "Rehan"));
// Function constructor
let myFunc = new Function("a", "b", "return a*b");
let a = myFunc(4, 12);
console.log(a);
// Lambda Functions
let digit = (x: number) => 10 + x;
console.log(digit(100));
// Lambda Statement
let digit1 = (x: number) => {
  x = 10 + x;
  console.log(x);
};
digit1(100);
// Interfaces in Typescript
interface userType {
  fname: string;
  age: number;
  sayHi: () => string;
}
//using the interface
let users: userType = {
  fname: "Rehan",
  age: 23,
  sayHi: () => {
    return "Hi";
  },
};
console.log(users);
//Interface and Objects
interface IPerson {
  firstName: string;
  lastName: string;
  established: number;
  sayHello: () => string;
}
let customer: IPerson = {
  firstName: "Simform",
  lastName: "Solutions",
  established: 2010,
  sayHello: () => {
    return "Hi there";
  },
};
console.log(customer);
let student: IPerson = {
  firstName: "Jim",
  lastName: "Blakes",
  established: 2010,
  sayHello: () => {
    return "Hello!!!";
  },
};
console.log(student);
// Interface of array type
interface NumList {
  [index: number]: number;
}
let numArr: NumList = [1, 2, 3];
numArr[0];
numArr[1];
console.log(numArr);
interface IStringList {
  [index: string]: string;
}
let strArr: IStringList = {};
strArr["TS"] = "TypeScript";
strArr["JS"] = "JavaScript";
console.log(strArr);
// Interfaces and Arrays
interface nameList {
  [index: number]: string;
}
let list2 = ["Rehan", 23, "Simform"];
interface ages {
  [index: string]: number;
}
console.log(list2);


