let score = "22"

console.log(typeof score);
console.log(typeof (score));

let valueinNum = Number(score); 
console.log(typeof valueinNum); 

score = "33abc"
valueinNum = Number(score);
console.log(valueinNum);

// "33" => 33
// "33abc" => NaN
// true => 1, false => 0

let loggedIn = "Hi"
let booleanLog = Boolean(loggedIn);

console.log(booleanLog)

// 1 => true, 0 => false
// "" => false, " " => true
// "Hi" (or any string) => true