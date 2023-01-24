//객체에서 사용할 수 있는 메서드
//Object.assign : 객체 복제


//2개 이상의 객체도 합칠 수 있다.

const user = {
    name : 'Mike',
}

const info1 ={
    age : 30,
}

const info2 = {
    gender : 'male',
}


const newUser =  Object.assign(user, info1, info2)

console.log(newUser)
