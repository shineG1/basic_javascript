//객체에서 사용할 수 있는 메서드
//Object.assign : 객체 복제



const user = {
    name : 'Mike',
    age : 30,
}

const newUser = Object.assign({},user);     //user 복제

newUser.name = 'Cho';

console.log(user);
console.log(newUser);


console.log(user != newUser)



