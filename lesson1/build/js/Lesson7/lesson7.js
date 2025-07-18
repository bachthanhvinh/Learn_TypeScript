"use strict";
// Index Signatures tạo ra một key lấy giá trị động 
const todaysTransactions = {
    Pizza: -10,
    Books: -5,
    Job: 50
};
// console.log(todaysTransactions.Pizza)
// console.log(todaysTransactions['Pizza'])
let prop = 'Pizza';
// console.log(todaysTransactions[prop])
const todaysNet = (transactions) => {
    let total = 0;
    for (const transaction in transactions) {
        total += transactions[transaction];
    }
    return total;
};
const student = {
    name: 'vinh',
    GPA: 3.7,
    class: ['dev', 'developer']
};
// console.log(students.test)
/////////// keyof Assertions lấy giá trị key theo kiểu union "vinh"| "lop" | "typeScript"
for (const key in student) {
    // console.log(`${key}: ${student[key as keyof Student]} `) 
}
Object.keys(student).map(key => {
    // console.log(`${student[key as keyof Student]}`)
});
const ElementStudent = (student, key) => {
    //  console.log(`Item ${key}: ${student[key]}`)
};
const monthlyIncomes = {
    salary: 1000,
    bonus: 50,
    sidehustle: 250
};
for (const revenue in monthlyIncomes) {
    console.log(monthlyIncomes[revenue]);
}
