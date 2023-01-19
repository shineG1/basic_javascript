//method


let boy ={
    name: "Mike",
    sayThis : () => {
        console.log(this)
    }
};

boy.sayThis();


// 메서드를 작성할 때 this를 사용해서 객체에 접근해야 한다면 화살표 함수는 사용하지 않는게 좋다.