//금칙어 : 콜라

function hasCoke(str){
    if(str.indexOf('콜라')){
        console.log('금칙어가 있습니다.');
    } else {
        console.log('통과');
    }
}


hasCoke('와 사이다가 찐이야!');
hasCoke('무슨소리, 콜라가 최고!');
hasCoke('콜라!');