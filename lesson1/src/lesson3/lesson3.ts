//////////// arrray /////////////
let stringArr = ["one", "hey", "vinh"];

let guitars = ["Strat", "les Pual", 4150];

let mixedData = ["EVH", 2004, true];

// arr full string
stringArr[0] = "vinh";
stringArr.push("push");
// arr string + number
guitars[0] = 2004;
guitars.unshift("vinh");
// arr string | number | boolean
mixedData;
// console.log("StringArr", stringArr, "guitars", guitars, "mixedData", mixedData);

let test = [];
let bands: string[] = [];
bands.push("vinh");
// bands.push(10);
// console.log("bands", bands);

//tuple
let myTuple: [string, number, boolean] = ["Dave", 42, true];
myTuple[1] = 30;
let mixed = ["John", 1, false];
// console.log("mixed", mixed);
// console.log("myTuple", myTuple);

///////// objects //////////////
let myObj: object;
myObj = [];
console.log(typeof myObj);

const exampleObj = {
  prop1: "Dave",
  prop2: "true",
};

exampleObj.prop1 = "vinh";

interface Guitarist {
  name?: string;
  active: boolean;
  albums: (string | number)[];
}
// type Guitarist = {
//   name: string;
//   active?: boolean;
//   albums: (string | number)[];
// };

let evh: Guitarist = {
  name: "vinh",
  active: true,
  albums: [120, "thanhvinh", "vinh", 10],
};
console.log(evh);

let jp: Guitarist = {
  //   name: "Jimmy",
  active: true,
  albums: ["I", "II", "III"],
};

const greetGuitarist = (guitarist: Guitarist) => {
  if (guitarist.name) {
    return `Hello ${guitarist.name.toLocaleUpperCase()}!`;
  }
  return `Hello!`;
};
console.log(greetGuitarist(jp));

// Enums
// "Unlike most TypeScript features, Enums are not a
// type-level addition to JavaScript but something
// added to the language and runtime."
// default 0 add number
enum Grade {
  U = 1,
  D,
  C,
  B,
  A,
}
// add String
// enum Grade {
//   U = "U",
//   D = "D",
//   C = "C",
//   B = "B",
//   A = "A",
// }

console.log(Grade.U);
