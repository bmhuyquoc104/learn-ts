// Basic types
let id: number = 5;
let firstName: string = "huy";
let isPerson: boolean = true;
let result: any = "pass";
result = 100;

// Array
let numbers: number[] = [1, 2, 3, 4];
let strings: string[] = ["a", "b", "c", "d"];
let mix: any[] = [1, 2, { name: "huy" }, [1, 2], true];

// Tuples
let tuples1: [string, number, string] = ["huy", 22, "huy nua ne"];
let tuplesArr: [number, string][] = [
  [1, "1"],
  [2, "2"],
  [3, "3"],
];

// Union
let union: string | number;
union = "huy";
union = 1;

let union2: undefined | number;
union2 = undefined;
union2 = 2;

// enum
enum directionEnum {
  "Up",
  "Left",
  "Right",
  "Down",
}
enum scoreEnum {
  "PA" = 50,
  "CR" = 60,
  "DI" = 70,
  "HD" = 80,
}

// Object types
type User = {
  name: string;
  age: number;
  isHired: boolean;
  languages: string[];
};

const user1: User = {
  name: "Huy",
  age: 22,
  isHired: false,
  languages: ["JS", "TS"],
};

// Functions
const addNumber = (x: number, y: number): number => x + y;
console.log(addNumber(1, 2));

const log = (message: number | string): void => console.log(message);

//  interface
interface Employee {
  name: string;
  age: number;
  // Use question mark to make the key become optional
  hobbies?: string[];
  //  Read only property => not allow to re assign
  readonly id: number;
}

const employee: Employee = {
  name: "huy",
  age: 12,
  id: 2,
};
interface MathFunction {
  (x: number, y: number): number;
}

const plus: MathFunction = (x: number, y: number): number => x + y;
const dive: MathFunction = (x: number, y: number): number => x / y;

// interface function
interface introduce {
  (name: string, message: string): string;
}

const showMessage: introduce = (name: string, message: string): string =>
  `This is ${name}. ${message} assignment`;

console.log(showMessage("huy", "I have to do"));

// Type assertion
let cid: any;
let customerId = cid as number;
let customerId2 = <string>cid;
cid = "12";
customerId = 12;
customerId2 = "12";

