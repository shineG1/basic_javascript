//객체


// function makeObject(name, age){
//     return {
//         name: name,
//         age: age,
//         hobby: "football"
//     };
// }


//축약형
function makeObject(name, age){
    return {
        name,
        age,
        hobby: "football"
    };
}

const Mike = makeObject("Mike", 30);
console.log(Mike);

console.log('age' in Mike);
console.log('birthday' in Mike);