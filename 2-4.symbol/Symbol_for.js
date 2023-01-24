// Symbol.for() : 전역심볼

const id1 = Symbol.for('id');
const id2 = Symbol.for('id');

console.log(id1===id2)
console.log(Symbol.keyFor(id1))

