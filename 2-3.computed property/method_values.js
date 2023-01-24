//객체에서 사용할 수 있는 메서드
//Object.values : 값 배열 반환

const user = {
    name : 'Mike',
    age : 30,
    gender : 'male',
}

const result =  Object.values(user);

console.log(result)