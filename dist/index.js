"use strict";
// Basic types
let id = 5;
let firstName = "huy";
let isPerson = true;
let result = "pass";
result = 100;
// Array
let numbers = [1, 2, 3, 4];
let strings = ["a", "b", "c", "d"];
let mix = [1, 2, { name: "huy" }, [1, 2], true];
// Tuples
let tuples1 = ["huy", 22, "huy nua ne"];
let tuplesArr = [
    [1, "1"],
    [2, "2"],
    [3, "3"],
];
// Union
let union;
union = "huy";
union = 1;
let union2;
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
const user1 = {
    name: "Huy",
    age: 22,
    isHired: false,
    languages: ["JS", "TS"],
};
// Functions
const addNumber = (x, y) => x + y;
console.log(addNumber(1, 2));
const log = (message) => console.log(message);
const employee = {
    name: "huy",
    age: 12,
    id: 2,
};
const plus = (x, y) => x + y;
const dive = (x, y) => x / y;
const showMessage = (name, message) => `This is ${name}. ${message} assignment`;
console.log(showMessage("huy", "I have to do"));
// Type assertion
let cid;
let customerId = cid;
let customerId2 = cid;
cid = "12";
customerId = 12;
customerId2 = "12";
// Class
class Student {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    introduce() {
        return `My name is ${this.name} `;
    }
}
const studentA = new Student("12", "huy");
studentA.introduce();
// implement class
class Teacher {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }
    showSalary() {
        return `${this.name} received ${this.salary}$ monthly`;
    }
}
const teacher3 = new Teacher("huy", 1000);
teacher3.showSalary();
// Extended class
class SchoolEmployee extends Teacher {
    constructor(position, experience, id, name, salary) {
        super(name, salary);
        this.experience = experience;
        this.id = id;
        this.position = position;
    }
}
const teacherEmployee = new SchoolEmployee("teacher", 5, 123, "huy", 100);
console.log(teacherEmployee.showSalary());
// generics
function getArr(items) {
    return new Array().concat(items);
}
let numArr = getArr([1, 2, 3, 4]);
let strArr = getArr(["huy", "ngoc", "anh"]);
numArr.push(5);
strArr.push("21");
const getArr2 = (items) => {
    return new Array().concat(items);
};
const numArr2 = getArr2([1, 2, 3]);
const strArr2 = getArr2(["ngoc", "anh"]);
numArr2.push(5);
strArr2.pop();
// Recap generic
const last = (arr) => {
    return arr[arr.length - 1];
};
const l = last(["huy", "ngoc", "anh"]);
const l2 = last([true, false, false, false]);
// Make arr
const makeArr = (x, y) => {
    return [x, y];
};
const x = makeArr("huy", "ngoc");
const y = makeArr("le", true);
// Extends
const makeFullName = (obj) => {
    return Object.assign(Object.assign({}, obj), { fullName: obj.firstName + obj.lastName });
};
const leAnhSir = makeFullName({
    firstName: "Sir",
    lastName: "Le Anh",
    age: 22,
});
console.log(leAnhSir);
