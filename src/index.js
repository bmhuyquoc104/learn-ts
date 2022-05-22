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
