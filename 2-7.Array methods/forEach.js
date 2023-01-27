//arr.forEach(fn) : 배열반복


let users = ['Mike', 'Tom', 'Jane'];

users.forEach((name, index)=>{
    console.log(`${index+1}. ${name}`);
})