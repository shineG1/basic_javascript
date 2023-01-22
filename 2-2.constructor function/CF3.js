//생성자 함수 : 상품 객체를 만들어보자

function Item (title, price){
    //this = {}
    this.title = title;
    this.price = price;
    this.showPrice = function(){
        console.log(`가격은 ${price}원 입니다.`);
    }

    //return this;
}


let item1 = new Item('인형', 3000);
let item2 = new Item('가방', 3000);
let item3 = new Item('지갑', 3000);


console.log(item1,item2,item3);

item1.showPrice();