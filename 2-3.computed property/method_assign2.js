//객체에서 사용할 수 있는 메서드
//Object.assign : 객체 복제



const user = {
    name : 'Mike',
    age : 30,
}

const newUser =  Object.assign({gender : 'male'},user);
//성별값만 있는 객체가 user를 병합함.

console.log(newUser)



