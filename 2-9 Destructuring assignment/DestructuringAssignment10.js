//객체 구조 분해 : 기본값

let user = {
    name : 'Jane',
    age : 18,
    gender : 'female'
};

let {name, age, gender='male'} = user;

console.log(name);
console.log(age);
console.log(gender);