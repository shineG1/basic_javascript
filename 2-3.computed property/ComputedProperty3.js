//Computed Property 계산된 프로퍼티

function makeObj(key, val){
    return{
        [key] : val,
    };
}

const obj = makeObj('성별', 'male');

console.log(obj)