"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// partial
// partial này sẽ biến tất cả các thuộc tính của một kiểu T thành tùy chọn (optional)
// interface Assignment là mắt buộc phải chuyền vào ful dữ liệu 
// dùng Partial thì tôi chỉ cần truyền vào 1 hoặc đầy đủ dữ liệu cũng được
// nó sẽ không bị lỗi gì cả
const updateAssignment = (assign, propsToUpdate) => {
    return Object.assign(Object.assign({}, assign), propsToUpdate);
};
const assgin1 = {
    studentId: "123vinh",
    title: "Final Project",
    grade: 0
};
console.log(updateAssignment(assgin1, { 'grade': 3 }));
const assignGraded = updateAssignment(assgin1, { grade: 95 });
console.log(assignGraded);
// Required , Readonly
const recordAssignment = (assign) => {
    // send to database, etc.
    return assign;
};
const assignVerified = Object.assign(Object.assign({}, assignGraded), { verified: true });
console.log(assignVerified);
recordAssignment(Object.assign(Object.assign({}, assignGraded), { verified: false }));
// console.log(recordAssignment({...assignGraded, verified: false}))
/// Record
//  Record<string, number> is equivalent to { [key: string]: number }
const hexColorMap = {
    red: 'FF0000',
    green: '00FF00',
    blue: '000FF'
};
const finalGrades = {
    Sara: 'B',
    Kelly: 'U',
    vinh: 'A'
};
const gradeData = {
    Sara: { assign1: 10, assign2: 30 },
    Kelly: { assign1: 20, assign2: 10 },
    vinh: { assign1: 30, assign2: 40 }
};
const score = {
    studentId: 'K123',
    grade: 85
};
const preview = {
    studentId: 'K123',
    title: 'Final Project'
};
// ReturnType
// type newAssign = { title: string, points: number}
const createNewAssign = (title, points) => {
    return { title, points };
};
const tsAssign = createNewAssign("Utility Types", 100);
console.log(tsAssign);
const assignArg = ['Generics', 100];
const tsAssing2 = createNewAssign(...assignArg);
console.log(tsAssing2);
const fetchUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield fetch('https://jsonplaceholder.typicode.com/Users').then(res => {
        return res.json();
    }).catch(err => {
        if (err instanceof Error)
            console.log(err.message);
    });
    return data;
});
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield fetchUsers();
    console.log(users);
});
main();
// fetchUsers().then(users => console.log(users))
