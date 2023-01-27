//arr.concat(arr2, arr3 ..) : 합쳐서 새배열 반환


let arr = [1,2];

                        


console.log(arr.concat([3,4]) )                             //[ 1, 2, 3, 4 ]
console.log(arr.concat([3,4],[5,6]) )                    //[ 1, 2, 3, 4, 5, 6 ]
console.log(arr.concat([3,4],5,6) )                       //[ 1, 2, 3, 4, 5, 6 ]
console.log(arr.concat(3,4))                                //[ 1, 2, 3, 4]