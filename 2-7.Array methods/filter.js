//arr.filter(fn) : 만족하는 모든 요소를 배열로 반환


let arr = [1,2,3,4,5,6];

const result = arr.filter((item)=>{
    return item % 2 ===0;

})

console.log(result);                    //2,4,6