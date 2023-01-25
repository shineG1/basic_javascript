//parseInt() : 문자열을 숫자로 반환

let margin = '10px'

console.log(parseInt(margin));          //10
console.log(Number(margin));            //NaN


let redColor = 'f3';
console.log(parseInt(redColor));        //NaN
console.log(parseInt(redColor, 16));        //243


console.log(parseInt(11));        //11
console.log(parseInt(11,2));        //3

