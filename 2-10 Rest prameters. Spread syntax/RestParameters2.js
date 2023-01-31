//나머지 매개변수 (Rest parameters)

function showName(...names){
    console.log(names);
}

showName();                                     //[]
showName('Mike');                           //[ 'Mike' ]
showName('Mike','Tom');                 //[ 'Mike', 'Tom' ]


