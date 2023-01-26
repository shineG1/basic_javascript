//str.indexOf(text) : 문자를 인수로 받아 몇번째에 위치하는지 알려준다.

let desc = "Hi guys, Nice to meet you.";

console.log(desc.indexOf('to'));            //14
console.log(desc.indexOf('man'));        //-1


// if(desc.indexOf('Hi')){
//     console.log('Hi가 포함된 문장입니다. ');
// }

if(desc.indexOf('Hi')>-1){
    console.log('Hi가 포함된 문장입니다. ');
}