/****************************
arr.sort()
배열 재정렬.
주의! 배열 자체가 변경됨
인수로 정렬 로직을 담은 함수를 받음
****************************/

let arr = [1,5,4,2,3];

arr.sort();

console.log(arr);                   //[ 1, 2, 3, 4, 5 ]


let str = ["a", "c", "d", "e", "b"];

str.sort();

console.log(str)                    //[ 'a', 'b', 'c', 'd', 'e' ]


let arr2 = [27,8,5,13];

arr2.sort();

console.log(arr2);                  //[ 13, 27, 5, 8 ]
