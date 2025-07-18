// Index Signatures tạo ra một key lấy giá trị động 

// interface TransactionObj {
//    readonly [index: string]: number
// }
interface TransactionObj {
  readonly [index: string]: number
  Pizza: number,
  Books: number,
  Job: number
}

const todaysTransactions: TransactionObj = {
  Pizza: -10,
  Books: -5,
  Job: 50
}

// console.log(todaysTransactions.Pizza)
// console.log(todaysTransactions['Pizza'])

let prop: string = 'Pizza'
// console.log(todaysTransactions[prop])


const todaysNet = (transactions: TransactionObj):
number => {
  let total = 0
  for (const transaction in transactions) {
      total += transactions[transaction]
  }
  return total
}

// console.log(todaysNet(todaysTransactions))

// todaysTransactions.Pizza = 40

// console.log(todaysTransactions["vinh"])
////////////////////// 

interface Student {
    // readonly [key: string]: string | number | string[]
    // | undefined
    name: string,
    GPA: number,
    class?: string[]
}

const student : Student = {
    name: 'vinh',
    GPA: 3.7,
    class: ['dev','developer']
}

// console.log(students.test)

/////////// keyof Assertions lấy giá trị key theo kiểu union "vinh"| "lop" | "typeScript"
for (const key in student) {
    // console.log(`${key}: ${student[key as keyof Student]} `) 
}

Object.keys(student).map(key => {
    // console.log(`${student[key as keyof Student]}`)
}
)

const ElementStudent = (student: Student , key: keyof Student): void => {
    //  console.log(`Item ${key}: ${student[key]}`)
}

// ElementStudent(student, 'name')

// interface Incomes {
//      [key: string]: number
// }
type Streams = 'salary' | 'bonus' | 'sidehustle'

type Incomes = Record<Streams, number | string>

const monthlyIncomes: Incomes = {
     salary: 1000,
     bonus: 50,
     sidehustle: 250
}

for(const revenue in monthlyIncomes) {
     console.log(monthlyIncomes[revenue as keyof Incomes])
}