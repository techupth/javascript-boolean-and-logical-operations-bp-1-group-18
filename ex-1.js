// Exercise #1: Event Conditions

// Start coding here
let isOver18 = true;
let hasCriminalBlacklist = true;
let isThai = true ;

let isAllow = isOver18 && !hasCriminalBlacklist && (isThai || !isThai ) ;
let james = isAllow ;
console.log(james);
