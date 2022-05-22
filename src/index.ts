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
  languages: ["JS","TS"],
};
