//심볼(Symbol)
//심볼은 유일한 식별자를 만들 때 사용한다.


const user = {
    name : 'Mike',
    age : 30,
}

const id = Symbol('id');
user[id] = 'myid';

console.log(id)