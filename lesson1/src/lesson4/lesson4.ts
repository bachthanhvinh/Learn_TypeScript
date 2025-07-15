// // type Aliases (bí danh giống như một hàm viết đề hàm khác dùng lại)
// type stringOrNumber = string | number;

// type stringOrNumberArray = (string | number)[];

// type Guitarist = {
//   name?: string;
//   ative: boolean;
//   albums: stringOrNumberArray;
// };

// type UserId = stringOrNumber;

// // literal types (chấp nhận 1 vài giá trị cụ thể)
// let myName: "Dave";

// let username: "vinh" | "vinh1" | "vinh2";
// console.log((username = "vinh"));
// // functions
// const add = (a: number, b: number): number => {
//   return a + b;
// };

// const logMsg = (message: any) => {
//   console.log(message);
// };

// logMsg("Hello!");
// logMsg(add(2, 3));

// let subtract = function (c: number, d: number): number {
//   return c - d;
// };

// type mathFunction = (a: number, b: number) => number;
// // interface use class or extend
// // interface mathFunction {
// //   (a: number, b: number): number;
// // }
// let multiply: mathFunction = function (c, d) {
//   return c * d;
// };
// logMsg(multiply(2, 2));

// // optional parameters
// const addAll = (a: number, b: number, c?: number): number => {
//   if (typeof c !== "undefined") {
//     return a + b + c;
//   }
//   return a + b;
// };
// // default param value
// const sumAll = (a: number = 10, b: number, c: number = 2): number => {
//   return a + b + c;
// };

// logMsg(addAll(2, 3, 2));
// logMsg(addAll(2, 3));
// logMsg(sumAll(undefined, 3));

// // Rest Parameters(tham số còn lại | gom nhiều phần từ -> thành 1 biến)
// const total = (...nums: number[]): number => {
//   return nums.reduce((prev, curr) => prev + curr);
// };

// logMsg(total(1, 2, 3, 4));

// const createError = (errMsg: string): never => {
//   throw new Error(errMsg);
// };

// const infinite = () => {
//   let i: number = 1;
//   while (true) {
//     i++;
//     if (i > 100) break;
//   }
// };

// // custom type guard
// const isNumber = (value: any): boolean => {
//   return typeof value === "number" ? true : false;
// };

// // use of the never type
// const numberOrString = (value: number | string): string => {
//   if (typeof value === "string") return "string";
//   if (isNumber(value)) return "number";
//   return createError("This should never happen!");
// };
