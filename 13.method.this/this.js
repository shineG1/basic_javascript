// 메서드 로그에 객체인 name 프롬퍼티를 넣고 싶다면?

// 이 방식은 x
// const user={
//     name : 'Mike',
//     sayHello : function(){
//         console.log(`Hello, I'm ${user.name}`)
//     }
// }

//this 사용
const user = {
    name : 'Mike',
    sayHello(){
        console.log(`Hello, I'm ${this.name}`)
    }
}




user.sayHello();