//객체에서 사용할 수 있는 메서드
//Object.fromEntries : 키/값 배열을 객체로


const arr = [
    ['mon','월'],
    ['tue','화'],
    ['wed','수']
]

const newArr = Object.fromEntries(arr);

console.log(newArr)