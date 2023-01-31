//arguments
//ES6에서는 나머지 매개변수 사용 권장

function showName(name){
    console.log(arguments.length);
    console.log(arguments[0]);
    console.log(arguments[1]);
}

showName('Mike','Tom');                           //Mike

