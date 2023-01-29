/***************************
arr.reduce()
인수로 함수를 받음
(누적 계산값, 현재값) => { return 계산값 }
****************************/

let userList = [
    {name: "Mike", age: 30},
    {name: "Tom", age: 10},
    {name: "Jane", age: 27},
    {name: "Sue", age: 26},
    {name: "Harry", age: 3},
    {name: "Steve", age: 60},
];

let result = userList.reduce((prev, cur)=>{
    if(cur.name.length ===3){
        prev.push(cur.name);
    }
    return prev;
}, []);


console.log(result);                //[ 'Tom', 'Sue' ]