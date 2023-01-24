//심볼(Symbol)
//심볼은 유일한 식별자를 만들 때 사용한다.


const a = Symbol();
const b = Symbol();

console.log(a);
console.log(b);


console.log(a===b);         //false
console.log(a==b);         //false