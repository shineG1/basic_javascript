// 소수점 자릿수 : toFixed()

//소수점 둘째자리 까지 표현(셋째 자리에서 반올림)

let userRate = 30.1234;

console.log(userRate.toFixed(2));           //30.12
console.log(userRate.toFixed(0));           //30
console.log(userRate.toFixed(6));           //30.123400


//toFixed는 문자열을 반환하므로 Number로 다시 숫자로 변환
console.log(Number(userRate.toFixed(2)));           