//Function
function Multiply(p1, p2) {
    return p1 * p2;
}
console.log(Multiply(4, 3));
// 2nd example
function add() {
    return 20 + 20; // if i will put string value it will give error because we have declare number.
}
console.log(add());
// when we are doing for string type
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
// Lambda Statement
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
