//함수 작성

//매개변수가 없는 함수
//에러메시지를 보여주는 함수

function showError(){
    alert('에러가 발생했습니다. 다시 시도해주세요.');
} 

showError();




//매개변수가 있는 함수

let msg = `Hello`;      //전역 변수(global varable)
console.log('함수 호출 전');
console.log(msg);

function sayHello(name){
    if(name){
        msg += `, ${name}`;
    }
    console.log('함수 내부')
    // 지역 변수(local varable)
    console.log(msg);
}

// sayHello('Mike');
// sayHello('Jiwon');
// sayHello('Cho');

sayHello('Jiwon');
console.log('함수 호출 후')
console.log(msg);