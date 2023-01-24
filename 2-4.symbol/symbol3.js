//심볼(Symbol)
//심볼은 유일한 식별자를 만들 때 사용한다.



//property key : 심볼형

const id = Symbol('id');
const user = {
    name : 'Mike',
    age : 30,
    [id] : 'myid',
}

console.log(user)
console.log(user[id])


//이런 메서드들은 키가 심볼형인 프로퍼티는 건너뜀

console.log(Object.keys(user))      //name과 age만 나온다
console.log(Object.values(user))      //Mike와 30만 나온다
console.log(Object.entries(user))      //[ 'name', 'Mike' ], [ 'age', 30 ] 만 나온다

//for in 도 마찬가지..
for(let a in user){
    console.log(a)
};