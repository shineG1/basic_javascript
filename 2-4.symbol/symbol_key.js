//숨겨진 symbol key 보는 법


const id = Symbol('id');

const user = {
    name : 'Mike',
    age : 30,
    [id] : 'myid'
}

console.log(Object.getOwnPropertySymbols(user));
console.log(Reflect.ownKeys(user));