//생성자함수

function User(name, age){
    this.name = name;
    this.age = age;
}

let user1 = new User('Mike',30);
let user2 = new User('Jane',22);
let user3 = new User('Tom',17);


console.log(user1);
console.log(user2);
console.log(user3);