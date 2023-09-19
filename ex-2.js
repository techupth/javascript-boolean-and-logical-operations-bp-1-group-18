// Exercise #2: Promotion Conditions

// Start coding here
let lastMonthPaidMoreThan4000 = true  // john spent 4001
let isWeekday = true // john went on shopping on Friday
let hasBoughtProductFromITCategory = true // john has never purchased any products under IT category
let hasAttendedDiscountEvent = true // john attended discount event before
let isPlatinum = true // john is a gold member

let hasPromotion = (lastMonthPaidMoreThan4000 && isWeekday && !hasBoughtProductFromITCategory && hasAttendedDiscountEvent) || !isPlatinum
let john = hasPromotion
console.log(john);
