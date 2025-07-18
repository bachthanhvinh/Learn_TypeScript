"use strict";
// class Coder {
//   secondLang!: string
//   constructor(
//     public readonly name: string,
//     public music: string,
//     private age: number,
//     protected lang: string = "TypeScript"
//   ) {
//     (this.name = name),
//       (this.music = music),
//       (this.age = age),
//       (this.lang = lang)
//   }
//   public getAge() {
//     return `Hello, I'm ${this.age}`
//   }
// }
// const Dave = new Coder("vinh", "chill", 21)
// // console.log(Dave.getAge())
// // console.log(Dave.age);
// // console.log(Dave.lang);
// class WebDev extends Coder {
//   constructor(
//     public computer: string,
//     name: string,
//     music: string,
//     age: number
//   ) {
//     super(name, music, age)
//     this.computer = computer
//   }
//   public getLang() {
//     return `I write ${this.lang}`
//   }
// }
// const sara = new WebDev("asus", "Thanh vinh", "chill guy", 21)
// console.log(sara.getLang())
// // console.log(sara.age);
// // console.log(sara.lang);
// ///////////////////////////////////////
// interface Musician {
//   name: string
//   instrument: string
//   play(acton: string): string
// }
// class Guitarist implements Musician {
//   name: string;
//   instrument: string;
//   constructor(name: string, instrument: string) {
//     (this.name = name), (this.instrument = instrument)
//   }
//   play(action: string) {
//     return `${this.name} ${action} the ${this.instrument}`
//   }
// }
// const Page = new Guitarist("vinh", "keyboard")
// console.log(Page.play("bop bop"))
// class Peeps {
//   static count: number = 0;
//   static getCount(): number {
//     return Peeps.count
//   }
//   public id: number
//   constructor(public name: string) {
//     this.name = name
//     this.id = ++Peeps.count
//   }
// }
// const vinh = new Peeps("vinh")
// const thanhvinh = new Peeps("thanhvinh")
// const bachthanhvinh = new Peeps("bachthanhvinh")
// // console.log(vinh.id);
// // console.log(thanhvinh.id);
// // console.log(bachthanhvinh.id);
// // console.log(Peeps.count);
// // console.log(Peeps.getCount());
// /////////////////
// class Bands {
//   private dataState: string[];
//   constructor() {
//     this.dataState = [];
//   }
//   public get getData(): string[] {
//     return this.dataState;
//   }
//   public set setData(value: string[]) {
//     if (Array.isArray(value) && value.every((el) => typeof el === "string")) {
//       this.dataState = value
//     } else throw new Error("Param is not an array of strings")
//   }
// }
// const myBand = new Bands();
// myBand.setData = ["vinh", "thanhvinh", "hoclaptrinh"]
// myBand.setData = [...myBand.getData, "TestVinh"]
// // myBand.setData = ["thanhvinh", 23];
// console.log(myBand.getData)
