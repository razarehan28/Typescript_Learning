var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//import Students from "./student";
//Function
function Multiply(p1, p2) {
    return p1 * p2;
}
console.log("Multiply : ", Multiply(4, 3));
// 2nd example
function add() {
    return 20 + 20; // if i will put string value it will give error because we have declare number.
}
console.log(add());
// // when we are doing for string type
var fName = function () {
    return "Rehan";
};
console.log(fName());
// Optional Parameters
var person_Details = function (id, name, email_id) {
    console.log("ID:" + id);
    console.log("Name:" + name);
    if (email_id != undefined) {
        console.log("EMAIL_ID:" + email_id);
    }
};
var company_details = function (id, name, email_id) {
    console.log("ID:" + id);
    console.log("Name:" + name);
    if (email_id != undefined) {
        console.log("EMAIL_ID:" + email_id);
    }
};
company_details(123, "Rehan Raza");
company_details(245, "Simform Solutions", "simform@xyz.com");
// Rest Parameters
var getNumber = function () {
    var numbs = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbs[_i] = arguments[_i];
    }
    numbs.forEach(function (element) {
        console.log("Numbers :" + element);
    });
};
getNumber(1, 2, 3, 4, 5, 6);
// Addition with Rest parameter
var addNumbers = function () {
    var numbs = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbs[_i] = arguments[_i];
    }
    var i;
    var sum = 0;
    for (i = 0; i < numbs.length; i++) {
        sum = sum + numbs[i];
    }
    console.log("sum of the numbers is:" + sum);
};
addNumbers(1, 2, 3); // 6
addNumbers(10, 10, 10, 10, 10, 10); // 60
// Default Parameters
var cal_discount = function (price, rate) {
    if (rate === void 0) { rate = 2.5; }
    var discount = price * rate;
    console.log("Discount amount :" + discount);
};
cal_discount(1000); //2500
cal_discount(1000, 0.3); // default value of rate is overwritten and is set to the value explicitly passed.
//Anonymous Function
var msg = function () {
    console.log("Hello world");
};
console.log(msg()); // Hello world
//Anonymous function with parameters
var res = function (x, y) {
    return x / y;
};
console.log(res(12, 2));
// In case of string in Anonymous Function
var studentName = function (lName, fName) {
    return lName + fName;
};
console.log(studentName("Raza", "Rehan"));
// Function constructor
var myFunc = new Function("a", "b", "return a*b");
var a = myFunc(4, 12);
console.log(a);
// Lambda Functions
var digit = function (x) { return 10 + x; };
console.log(digit(100));
// // Lambda Statement
var digit1 = function (x) {
    x = 10 + x;
    console.log(x);
};
digit1(100);
//using the interface
var users = {
    fname: "Rehan",
    age: 23,
    sayHi: function () {
        return "Hi";
    }
};
console.log(users);
var customer = {
    firstName: "Simform",
    lastName: "Solutions",
    established: 2010,
    sayHello: function () {
        return "Hi there";
    }
};
console.log(customer);
var student = {
    firstName: "Jim",
    lastName: "Blakes",
    established: 2010,
    sayHello: function () {
        return "Hello!!!";
    }
};
console.log(student);
var numArr = [1, 2, 3];
numArr[0];
numArr[1];
console.log(numArr);
var strArr = {};
strArr["TS"] = "TypeScript";
strArr["JS"] = "JavaScript";
console.log(strArr);
var list2 = ["Rehan", 23, "Simform"];
console.log(list2);
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
// let s = new Students("Rehan", "Raza"); // creating a object
// console.log("Reading attribute value Students as :  " + s.fName); // access the field
// console.log(s.GetFullName()); // access the function
// Class Inheritance in Typescript
var shape = /** @class */ (function () {
    function shape(Area) {
        this.Area = Area;
    }
    return shape;
}());
var circle = /** @class */ (function (_super) {
    __extends(circle, _super);
    function circle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    circle.prototype.GetShapeValue = function () {
        console.log("Area of the circle:  " + this.Area);
    };
    return circle;
}(shape));
var z = new circle(223);
z.GetShapeValue();
// MultiLevel Inheritance in Typescript
var Root = /** @class */ (function () {
    function Root() {
    }
    return Root;
}());
var child = /** @class */ (function (_super) {
    __extends(child, _super);
    function child() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return child;
}(Root));
var leaf = /** @class */ (function (_super) {
    __extends(leaf, _super);
    function leaf() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return leaf;
}(child));
var obj = new leaf();
obj.str = "Hello world";
console.log(obj.str);
var AgreeLoan = /** @class */ (function () {
    function AgreeLoan(interest, rebate) {
        this.interest = interest;
        this.rebate = rebate;
    }
    return AgreeLoan;
}());
var obj1 = new AgreeLoan(10, 1);
console.log("Interest is : " + obj1.interest + " Rebate is : " + obj1.rebate);
// Generics in Typescript
function user1(data) {
    return data;
}
console.log(typeof user1);
console.log(user1(1));
console.log(user1("Rehan")); // It will take all type of data type
// Generic Function
function getArray(items) {
    return new Array().concat(items);
}
var myNumArr = getArray([100, 200, 300]);
var myStrArr = getArray(["Hello", "World"]);
myNumArr.push(400); // 400
myStrArr.push("Hello TypeScript"); // Hello typescript
// myNumArr.push("Hi"); // Compiler Error
// myStrArr.push(500); // Compiler Error
// Multiple Type Variables in Generics
function displayType1(id, name, employee) {
    console.log(typeof id + ", " + typeof name + "," + typeof employee);
}
displayType1(1, "Steve", true); // number, string
// Generic Array Methods
function displayNames(names) {
    console.log(names.join(", "));
}
displayNames(["Rehan", "Raza"]); // Rehan, Raza
var keyvalue1 = { name: "Rehan", value: 12345 }; // OK
var keyvalue2 = { name: 1, value: 345526 }; // OK
// Generic Class in Typescript
var KeyValuePair = /** @class */ (function () {
    function KeyValuePair() {
    }
    KeyValuePair.prototype.setKeyValue = function (key, val) {
        this.key = key;
        this.val = val;
    };
    KeyValuePair.prototype.display = function () {
        console.log("Key = ".concat(this.key, ", val = ").concat(this.val));
    };
    return KeyValuePair;
}());
var keyvaluepair1 = new KeyValuePair();
keyvaluepair1.setKeyValue(1, "Simform");
keyvaluepair1.display(); //Output: Key = 1, Val = Simform
var keyvaluepair2 = new KeyValuePair();
keyvaluepair2.setKeyValue("solutions", "Raza");
keyvaluepair2.display(); //Output: Key = solutions, Val = Raza
// Enums in Typescipt
// For Numeric value
var Days;
(function (Days) {
    Days[Days["Monday"] = 1] = "Monday";
    Days[Days["Tuesday"] = 2] = "Tuesday";
    Days[Days["Wednesday"] = 3] = "Wednesday";
    Days[Days["Thursday"] = 4] = "Thursday";
    Days[Days["Friday"] = 5] = "Friday";
})(Days || (Days = {}));
var whichDay;
whichDay = Days.Monday;
console.log("Today Day:" + whichDay);
// For string value
var Day;
(function (Day) {
    Day["monday"] = "Monday";
    Day["tuesday"] = "Tuesday";
    Day["wednesday"] = "Wednesday";
    Day["thursday"] = "Thursday";
    Day["friday"] = "Friday";
})(Day || (Day = {}));
var currentDay;
currentDay = Day.wednesday;
console.log("Today is :" + currentDay === "Monday"); // we can match also
// Heterogeneous Enum in typescript
var Status;
(function (Status) {
    Status["Active"] = "ACTIVE";
    Status[Status["Deactivate"] = 1] = "Deactivate";
    Status[Status["Pending"] = 2] = "Pending";
})(Status || (Status = {}));
var currentStatus;
currentStatus = Status.Deactivate;
console.log("Status is :" + currentStatus); //  enums that contain both string and numeric values.
// Never type in Typescript
// function throwError(errorMsg: string): never {
//   throw new Error(errorMsg);
// }
// function keepProcessing(): never {
//   while (true) {
//     console.log("I always does something and never ends.");
//   }
// }
// console.log(keepProcessing());
// Data Modifiers in Typescript
var Employee = /** @class */ (function () {
    function Employee() {
    }
    return Employee;
}());
var emp2 = new Employee();
emp2.empId = 123;
emp2.empName = "Raza";
console.log(emp2);
// Private in Typescript
var Emp = /** @class */ (function () {
    function Emp() {
    }
    return Emp;
}());
var emp3 = new Emp();
//emp3.empCode = 123; // Compiler Error
emp3.empName = "Rehan";
console.log(emp3);
// ReadOnly keyword in Typescript
var Employees = /** @class */ (function () {
    function Employees(code, name) {
        this.empCode = code;
        this.empName = name;
    }
    return Employees;
}());
var emp4 = new Employees(10, "John");
//emp4.empCode = 20; //Cannot assign to 'empCode' because it is a read-only property.
emp4.empName = "Raza";
console.log(emp4);
// Static keyword in Typescript
var Circle = /** @class */ (function () {
    function Circle() {
    }
    Circle.calculateArea = function (radius) {
        return this.pi * radius * radius;
    };
    Circle.pi = 3.14;
    return Circle;
}());
console.log(Circle.pi); // 3.14
console.log(Circle.calculateArea(5)); //  78.5
