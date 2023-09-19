// Exercise #1: Event Conditions

// Start coding here
let isOver18 = true;
let hasCriminalBlacklist = true;
let isThai = true;

let isAllow = (!hasCriminalBlacklist || !isThai) || isOver18
let James = isAllow
console.log(James);
// เงื่อนไขเพียงข้อเดียวในการเข้าร่วมงานคือต้องอายุ 18 ปีขึ้นไป และเจมส์อายุ 18 ปี สามารถเข้าร่วมงานได้