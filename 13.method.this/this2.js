let boy = {
    name : 'Mike',
    sayHello(){
        console.log(`Hello, I'm ${this.name}`);
    }
}

let girl = {
    name : 'Jane',
    sayHello(){
        console.log(`Hello, I'm ${this.name}`);
    }
}


boy.sayHello();
girl.sayHello();


