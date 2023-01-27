//arr.splice() : 삭제된 요소 반환


let arr = [1,2,3,4,5];
let result = arr.splice(1,2);


console.log(arr)                    //[ 1, 4, 5 ]
console.log(result)                 //[ 2, 3 ]