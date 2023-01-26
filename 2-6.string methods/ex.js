let list = [
    "01. 들어가며",
    "02. JS의 역사",
    "04. 자료형",
    "03. 함수",
    "05. 배열",
]

let newList = [];

for(let i=0; i<list.length; i++){
    newList.push(list[i].slice(4));
}

console.log(newList)

//[ '들어가며', 'JS의 역사', '자료형', '함수', '배열' ]