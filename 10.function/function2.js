// 전역변수와 지역변수

let msg = "welcome";
console.log(msg);

function sayHello(name){
    let msg = "Hello"
    console.log(msg + ' ' + name);
}

sayHello('Jiwon');
console.log(msg);
