// 문장에서 전화번호만 찾기
s = `
홍길동 : 010-0000-1111
임꺽정 : 010-1111-2222
장길산 : 010-2222-3333
강감찬 : 011-3333-4444
`;

res = s.match(/\d{3}-\d{4}-\d{4}/ig);
// ig옵션이 있어야 여러개 다 찾아옴!
console.log(res);
res.forEach(item => {
    console.log(item);
});

/*
    search 함수 : 문자열 함수, 찾아서 인덱스를 반환함
    첫번째 것만 찾음 / 없으면 -1 반환
    정수를 반환하는 함수를 만들 때, 0번부터가 배열의 인덱스로 존재
    0 또는 null을 반환
    자바스크립트의 경우에는 반환값이 없을 경우에 undefined가 반환
 */

console.log("search함수");
res = s.search(/\d{3}-\d{4}-\d{4}/ig);
// ig옵션이 있어야 여러개 다 찾아옴!
console.log(res);
// res.forEach(item => {
//     console.log(item);
// });





// replace함수 : 패턴 바꾸기
// 문자열 함수
s1 = "like tomato tree watermelon cherry live Like yellow love likelike green";
// like -> love 로 바꾸기
// 바뀐 문자열을 반환함
// 자바스크립트 string은 원래 문자열은 변경불가, read only 반환문자열 받기
result = s1.replace("like", "love");
// 첫번째 것 하나만 찾아서 바꿈 / 대소문자 구분함
console.log(result);
result = s1.replaceAll("like", "love");
console.log(result);
// replacaAll : 전부 바꿈

// 패턴, 바꿀 문자열 -> 패턴에 맞는 문자열을 찾아 바꾸고 싶은 문자열로 바꿔서 반환
result1 = s1.replace(/like/ig, "love");
// ig는 대소문자 관계없이 여러개 찾아옴
console.log(result1);

// replace에 callback 함수가 있음
result = s1.replace(/like/ig, function(a,b,c){
    console.log("a", a);
    console.log("b", b);
    console.log("c", c);
});

result1 = s1.replace(/like/ig, function(item, index){
    console.log(item, index);
    return item.toUpperCase();
});

regexp = new RegExp(/(\d{3})-(\d{4})-(\d{4})/g);
result2 = s.replace(regexp, function(item, index){
    console.log(item, index);
    //console.log("$1 $2 $3");
    return item;
});
console.log(result2);
// $1, $2, $3 등은 그룹화를 했을 때 적용됨
regexp = new RegExp(/(\d{3})-(\d{4})-(\d{4})/g);
result3 = s.replace(regexp, `$1$2$3`);
console.log(result3);