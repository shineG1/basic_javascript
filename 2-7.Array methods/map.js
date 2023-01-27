//arr.map(fn) : 함수를 받아 특정 기능을 시행하고 새로운 배열을 반환


let userList = [
    {name : "Mike", age : 30},
    {name : "Jane", age : 27},
    {name : "Tom", age : 10},
];


let newUserList = userList.map((user, index)=>{
    return Object.assign({}, user, {
        isAdult : user.age > 19,
    });
});

console.log(newUserList);
/*
[
    { name: 'Mike', age: 30, isAdult: true },
    { name: 'Jane', age: 27, isAdult: true },
    { name: 'Tom', age: 10, isAdult: false }
  ]
  */
  

