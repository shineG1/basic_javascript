//Array.isArray()

let user = {
  name : "Mike",
  age : 30,
};


let userList = ["Mike", "Tom", "Jane"];


console.log(typeof user);             //object
console.log(typeof userList);         //object



console.log(Array.isArray(user));                //false
console.log(Array.isArray(userList));           //true 