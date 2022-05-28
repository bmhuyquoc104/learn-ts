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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
// Basic types
var id = 5;
var firstName = "huy";
var isPerson = true;
var result = "pass";
result = 100;
// Array
var numbers = [1, 2, 3, 4];
var strings = ["a", "b", "c", "d"];
var mix = [1, 2, { name: "huy" }, [1, 2], true];
// Tuples
var tuples1 = ["huy", 22, "huy nua ne"];
var tuplesArr = [
    [1, "1"],
    [2, "2"],
    [3, "3"],
];
// Union
var union;
union = "huy";
union = 1;
var union2;
union2 = undefined;
union2 = 2;
// enum
var directionEnum;
(function (directionEnum) {
    directionEnum[directionEnum["Up"] = 0] = "Up";
    directionEnum[directionEnum["Left"] = 1] = "Left";
    directionEnum[directionEnum["Right"] = 2] = "Right";
    directionEnum[directionEnum["Down"] = 3] = "Down";
})(directionEnum || (directionEnum = {}));
var scoreEnum;
(function (scoreEnum) {
    scoreEnum[scoreEnum["PA"] = 50] = "PA";
    scoreEnum[scoreEnum["CR"] = 60] = "CR";
    scoreEnum[scoreEnum["DI"] = 70] = "DI";
    scoreEnum[scoreEnum["HD"] = 80] = "HD";
})(scoreEnum || (scoreEnum = {}));
var user1 = {
    name: "Huy",
    age: 22,
    isHired: false,
    languages: ["JS", "TS"]
};
// Functions
var addNumber = function (x, y) { return x + y; };
console.log(addNumber(1, 2));
var log = function (message) { return console.log(message); };
var employee = {
    name: "huy",
    age: 12,
    id: 2
};
var plus = function (x, y) { return x + y; };
var dive = function (x, y) { return x / y; };
var showMessage = function (name, message) {
    return "This is ".concat(name, ". ").concat(message, " assignment");
};
console.log(showMessage("huy", "I have to do"));
// Type assertion
var cid;
var customerId = cid;
var customerId2 = cid;
cid = "12";
customerId = 12;
customerId2 = "12";
// Class
var Student = /** @class */ (function () {
    function Student(id, name) {
        this.id = id;
        this.name = name;
    }
    Student.prototype.introduce = function () {
        return "My name is ".concat(this.name, " ");
    };
    return Student;
}());
var studentA = new Student("12", "huy");
studentA.introduce();
// implement class
var Teacher = /** @class */ (function () {
    function Teacher(name, salary) {
        this.name = name;
        this.salary = salary;
    }
    Teacher.prototype.showSalary = function () {
        return "".concat(this.name, " received ").concat(this.salary, "$ monthly");
    };
    return Teacher;
}());
var teacher3 = new Teacher("huy", 1000);
teacher3.showSalary();
// Extended class
var SchoolEmployee = /** @class */ (function (_super) {
    __extends(SchoolEmployee, _super);
    function SchoolEmployee(position, experience, id, name, salary) {
        var _this = _super.call(this, name, salary) || this;
        _this.experience = experience;
        _this.id = id;
        _this.position = position;
        return _this;
    }
    return SchoolEmployee;
}(Teacher));
var teacherEmployee = new SchoolEmployee("teacher", 5, 123, "huy", 100);
console.log(teacherEmployee.showSalary());
// generics
function getArr(items) {
    return new Array().concat(items);
}
var numArr = getArr([1, 2, 3, 4]);
var strArr = getArr(["huy", "ngoc", "anh"]);
numArr.push(5);
strArr.push("21");
var getArr2 = function (items) {
    return new Array().concat(items);
};
var numArr2 = getArr2([1, 2, 3]);
var strArr2 = getArr2(["ngoc", "anh"]);
numArr2.push(5);
strArr2.pop();
// Recap generic
var last = function (arr) {
    return arr[arr.length - 1];
};
var l = last(["huy", "ngoc", "anh"]);
var l2 = last([true, false, false, false]);
// Make arr
var makeArr = function (x, y) {
    return [x, y];
};
var x = makeArr("huy", "ngoc");
var y = makeArr("le", true);
// Extends
var makeFullName = function (obj) {
    return __assign(__assign({}, obj), { fullName: obj.lastName + obj.firstName });
};
var leAnhSir = makeFullName({
    firstName: "Sir",
    lastName: "Le Anh",
    age: 22
});
console.log(leAnhSir);
