//생성자함수
function User(name,age){
    //this = {}
    this.name = name;
    this.age = age;
    this.sayName = function(){
        console.log(this.name);
    }
    //return this;
}

let user5 = new User('Han',40);

user5.sayName();