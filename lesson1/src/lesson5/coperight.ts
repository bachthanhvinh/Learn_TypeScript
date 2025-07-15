// // original JS Code
// const year = document.getElementById("year");
// const thisYear = new Date().getFullYear();

// year.setAttribute("datetime", thisYear);

// year.textContent = thisYear;

// // 1nd
// let year: HTMLElement | null = document.getElementById("year");
// let thisYear: string;

// thisYear = new Date().getFullYear().toString();

// if (year) {
//   year.setAttribute("datetime", thisYear);

//   year.textContent = thisYear;
// }
// 2nd
const year = document.getElementById("year") as HTMLSpanElement;
let thisYear: string;

thisYear = new Date().getFullYear().toString();

if (year) {
  year.setAttribute("datetime", thisYear);

  year.textContent = thisYear;
}
