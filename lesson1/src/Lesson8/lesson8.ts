// const  echo =  <T>(arg: T): T => arg

// const isObj = <T>(arg: T): boolean => {
//      return (typeof arg === 'object' && !Array.isArray(arg) 
//      && arg !== null
//      )
// }

// console.log(isObj(true))
// console.log(isObj('vinh'))
// console.log(isObj([1,2,3]))
// console.log(isObj({name: 'John'}))
// console.log(isObj(null))


// // const isTrue = <T>(arg: T): {arg: T, is: boolean} => {
// //     if (Array.isArray(arg) && !arg.length) {
// //         return { arg, is: false}
// //     }
// //     if (isObj(arg) && !Object.keys(arg as keyof T).length) {
// //         return { arg, is: false}
// //     }
// //     return { arg, is: !!arg}
// // }

// // console.log(isTrue(false));
// // console.log(isTrue(0));
// // console.log(isTrue(true));
// // console.log(isTrue(1));
// // console.log(isTrue('vinh'));
// // console.log(isTrue(''));
// // console.log(isTrue(null));
// // console.log(isTrue(undefined));
// // console.log(isTrue({}));
// // console.log(isTrue({ name: "thanhvinh"}));
// // console.log(isTrue([1, 2, 3]));
// // console.log(isTrue(NaN));
// // console.log(isTrue(-0));

// interface BoolCheck<T> {
//       value: T,
//       is: boolean 
// }

// const CheckBoolValue = <T>(arg: T): BoolCheck<T> => {
//     if (Array.isArray(arg) && !arg.length) {
//         return { value: arg, is: false}
//     }
//     if (isObj(arg) && !Object.keys(arg as keyof T).length) {
//         return { value: arg, is: false}
//     }
//     return { value: arg, is: !!arg}
// }

// console.log(CheckBoolValue(false));
// console.log(CheckBoolValue(0));
// console.log(CheckBoolValue(true));
// console.log(CheckBoolValue(1));
// console.log(CheckBoolValue('vinh'));
// console.log(CheckBoolValue(''));
// console.log(CheckBoolValue(null));
// console.log(CheckBoolValue(undefined));
// console.log(CheckBoolValue({}));
// console.log(CheckBoolValue({ name: "thanhvinh"}));
// console.log(CheckBoolValue([1, 2, 3]));
// console.log(CheckBoolValue(NaN));
// console.log(CheckBoolValue(-0));



// const processUser = <T extends HasID>(user: T): T => 
// {
//     // process the user with logic here
//     return user
// }

// console.log(processUser({ id: 1, name: 'vinh'}))

// interface HasID {
//     id: number
// }

// const getUserPropert = <T extends HasID, K extends keyof T>(user: T[], key: K): T[K][] => {
//     return user.map(item => item[key])
// }

// const users = [
//     {
//         id: 1,
//         name: 'vinh',
//         email: "bachthanhvinh12@gmail.com"
//     },
//     {
//         id: 2,
//         name: 'bachthanhvinh',
//         email: "Thanhvinh@gmail.com"
//     }
// ]

// console.log(getUserPropert(users, 'name'))

class Product<T> {
    private data: T

    constructor(value: T) {
        this.data = value
    }
    get state(): T {
       return this.data
    }
    set state(value: T) {
        this.data = value
    }
}

const myProduct = new Product("vinh")

console.log(myProduct.state)
myProduct.state = 'thanhvinh'
// myProduct.state = 21
console.log(myProduct.state)

const myNumber = new Product<(number | string | boolean)[]>([15]) 

console.log(myNumber.state)
myNumber.state = ['thanhvinh', 18,true]
console.log(myNumber.state)