function sigma(limit = 10){
    if(limit < 10){
        return;
        // 값을 지정 안하면 undefined 나옴
    }
    let s =0;
    let i;

    for(i=1; i<=limit; i++){
        s+=i;
    }
    return s;
}

//console.log(sigma());
//console.log(sigma(100));


// 다른 파일에서 이 함수에 접근 가능
// exports[“키”] = 함수명  또는  exports.키 = 함수명 
exports.sigma = sigma;
// exports["s"] = sigma;
// sigma라는 이름으로 sigma라는 함수를 외부로 내보내겠다
// exports.내보낼 이름 = 만들어놓은 함수이름(내보낼 함수)
