//객체에서 사용할 수 있는 메서드
//Object.keys : 키 배열 반환

const user = {
    name : 'Mike',
    age : 30,
    gender : 'male',
}

const result =  Object.keys(user);

console.log(result)