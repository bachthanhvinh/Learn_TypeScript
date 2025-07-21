// Utility Types
interface Assignment {
    studentId: string,
    title: string,
    grade: number,
    verified?: boolean
}
// partial
// partial này sẽ biến tất cả các thuộc tính của một kiểu T thành tùy chọn (optional)
// interface Assignment là mắt buộc phải chuyền vào ful dữ liệu 
// dùng Partial thì tôi chỉ cần truyền vào 1 hoặc đầy đủ dữ liệu cũng được
// nó sẽ không bị lỗi gì cả
const updateAssignment = (
    assign: Assignment, 
    propsToUpdate: Partial<Assignment>
): Assignment => {
        return {...assign, ...propsToUpdate}
}

const assgin1: Assignment = {
    studentId: "123vinh",
    title: "Final Project",
    grade: 0
}

console.log(updateAssignment(assgin1, {'grade': 3}))

const assignGraded: Assignment = updateAssignment(assgin1, {grade: 95})

console.log(assignGraded)

// Required , Readonly
const recordAssignment = (assign: 
Required<Assignment>): Assignment => {
    // send to database, etc.
    return assign
}

const assignVerified: Readonly<Assignment> = {
    ...assignGraded, verified: true
}
console.log(assignVerified)

recordAssignment({...assignGraded, verified: false})

// console.log(recordAssignment({...assignGraded, verified: false}))

/// Record
//  Record<string, number> is equivalent to { [key: string]: number }

const hexColorMap: Record<string, string> = {
    red: 'FF0000',
    green: '00FF00',
    blue: '000FF'
}

type Students = 'Sara' | 'Kelly' | 'vinh'
type LetterGrades = 'A' | 'B' | 'C' | 'D' | 'U'

const finalGrades: Record<Students, LetterGrades> = {
    Sara: 'B',
    Kelly: 'U',
    vinh: 'A'
}

interface Grades  {
    assign1: number,
    assign2: number
}

const gradeData: Record<Students, Grades> = {
    Sara: { assign1: 10, assign2: 30},
    Kelly: { assign1: 20, assign2: 10},
    vinh: { assign1: 30, assign2: 40}
}

// Pink and Omit

type AssignResult = Pick<Assignment , 'studentId' | 'grade'>

const score: AssignResult = {
    studentId: 'K123',
    grade: 85
}
type AssignPreview = Omit<Assignment, 'grade' | 'verified'>

const preview: AssignPreview = {
    studentId: 'K123',
    title: 'Final Project'
}

// console.log(score)

// Exclude and Extract

type adjustedGrade = Exclude<LetterGrades, 'U'>

type highGrades = Extract<LetterGrades, 'A' | 'B'>

// Nonnullable

type AllPossibleGrades = 'Dave' | 'Vinh' | null | undefined

type NameOnly = NonNullable<AllPossibleGrades>

// ReturnType

// type newAssign = { title: string, points: number}

const createNewAssign = (title: string, points: number) => {
    return { title, points}
}

type NewAssign = ReturnType<typeof createNewAssign>

const tsAssign: NewAssign = createNewAssign("Utility Types", 100)

console.log(tsAssign)

// Parmeters

type AssignParams = Parameters<typeof createNewAssign>

const assignArg: AssignParams = ['Generics', 100]

const tsAssing2: NewAssign = createNewAssign(...assignArg)

console.log(tsAssing2)

// Awaited - helps us with the ReturnType of a Promise

interface User {
    id: number,
    name: string,
    username: string,
    email: string
}

const fetchUsers = async (): Promise<User[]> => {

    const data = await fetch (
        'https://jsonplaceholder.typicode.com/Users'
    ).then ( res => {
        return res.json()
    }).catch ( err => {
        if (err instanceof Error) console.log(err.message
        )
    })
    return data
}

type FetchUsersReturnType = Awaited<ReturnType<typeof fetchUsers>>

const main = async () => {
  const users: FetchUsersReturnType = await fetchUsers();
  console.log(users);
}

main();



// fetchUsers().then(users => console.log(users))

