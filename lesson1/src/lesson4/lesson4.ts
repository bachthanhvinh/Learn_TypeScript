// type Aliases
type stringOrNumber = string | number;

type stringOrNumberArray = (string | number)[];

type Guitarist = {
  name?: string;
  ative: boolean;
  albums: stringOrNumberArray;
};

type UserId = stringOrNumber;

// literal types
let myName: "Dave";

let username: "vinh" | "vinh1" | "vinh2";
console.log((username = "vinh"));
// functions
const add = (a: number, b: number): number => {
  return a + b;
};

const logMsg = (message: any) => {
  console.log(message);
};

logMsg("Hello!");
logMsg(add(2, 3));

let subtract = function (c: number, d: number): number {
  return c - d;
};

type mathFunction = (a: number, b: number) => number;
// interface use class or extend
// interface mathFunction {
//   (a: number, b: number): number;
// }
let multiply: mathFunction = function (c, d) {
  return c * d;
};
logMsg(multiply(2, 2));
