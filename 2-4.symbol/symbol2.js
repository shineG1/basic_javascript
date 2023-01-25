//심볼(Symbol)
//심볼은 유일한 식별자를 만들 때 사용한다.



//심볼을 만들 때 설명을 붙여줄 수 있다.

const id = Symbol('id');
const id2 = Symbol('id');

console.log(id);
console.log(id2);
console.log(id===id2);
console.log(id==id2);


