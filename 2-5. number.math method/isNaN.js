//isNaN() : NaN인지 아닌지 판단

let x = Number('x');

console.log(x);         //NaN
console.log(x==NaN);          //false
console.log(x===NaN);          //false
console.log(NaN==NaN);          //false (자기자신도 false)


console.log(isNaN(x));          //true
console.log(isNaN(3));          //false

