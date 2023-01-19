//method


let boy ={
    name: "Mike",
    showName : function(){
        console.log(boy.name)
    }
};

let man = boy;
man.name = "Tom"

console.log(boy.name);