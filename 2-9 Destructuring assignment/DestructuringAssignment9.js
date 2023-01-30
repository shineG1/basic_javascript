//객체 구조 분해 : 기본값

let user = {name : 'Mike', age : 30};

let {name, age, gender='male'} = user;

console.log(name);
console.log(age);
console.log(gender);