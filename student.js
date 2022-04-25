"use strict";
exports.__esModule = true;
var Students = /** @class */ (function () {
    //constructor
    function Students(fName, lName) {
        this.fName = fName;
        this.lName = lName;
    }
    //function
    Students.prototype.GetFullName = function () {
        return this.fName + "..." + this.lName;
    };
    return Students;
}());
exports["default"] = Students;
