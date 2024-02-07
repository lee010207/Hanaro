// test함수 : 정규식 함수 , 정규식 객체에 있는 함수
// 패턴 존재 유무만 판단

let s1 = "I like banana";
let s2 = "Like you";
let s3 = "I don't like potato";
let s4 = "Like I, you like";

console.log("like 유무 확인");
let regexp = new RegExp(/like/);
// 패턴 객체 생성 : like가 있냐없냐 판단하는
console.log(s1, regexp.test(s1));   // true
console.log(s2, regexp.test(s2));   // false
console.log(s3, regexp.test(s3));   // true

console.log(" ");

console.log("/like/i", "대소문자 관계없이 like 유무 확인");
regexp = new RegExp(/like/i); // 대소문자 관계없음
console.log(s1, regexp.test(s1));   // true
console.log(s2, regexp.test(s2));   // true
console.log(s3, regexp.test(s3));   // true

console.log(" ");

// /^like/i : 대소문자 관계없이 like로 시작하는지 확인
console.log("/^like/i", "대소문자 관계없이 like로 시작 유무 확인");
regexp = new RegExp(/^like/i);
console.log(s1, regexp.test(s1));    // false
console.log(s2, regexp.test(s2));    // true
console.log(s3, regexp.test(s3));    // false

console.log(" ");
// /like$/i : 대소문자 관계없이 like로 끝나는지
console.log("/like$/i", "대소문자 관계없이 like로 끝 유무 확인");
regexp = new RegExp(/like$/i);
console.log(s1, regexp.exec(s1));    // false
console.log(s2, regexp.exec(s2));    // false
console.log(s3, regexp.exec(s3));    // false
console.log(s4, regexp.exec(s4));    // true

/*
    exec 함수 : 조건에 부합하는 결과를 배열로 반환함
    단, 조건에 부합하는 결과가 1개 이상이라도 무조건 부합하는 결과의 첫번째 값을 반환함

    해당 패턴에 일치자가 없으면 null을 반환하고
    있으면 일치자 단어, 입력문장, groups를 배열로 반환함

    => 010 , 019, 016, 018 ...  - 정보를 그룹화 할 수 있음
    \d{3} : 정수 3자리
    \d{3}-\d{4}-\d{4}   : 000-0000-0000 이런 서식을 만족하는 패턴을 찾아라
    (\d{3})-(\d{4})-(\d{4}) -> 그룹으로 묶어줌 
*/

s = "I like apple, What do you like?";

// ig 옵션일 떄 -- 문서전체에서 대소문자 관계없이 다 찾아라
// exec함수는 한개만 찾아옴
console.log(/like/igm.exec(s));

// 여러번 등장할 경우 -> match함수 사용
// 문자열 .match(정규식)
// match함수는 정규식에 속한 함수가 아니라 문자열에 속함
// 매개변수로 정규식(리터럴)을 받아감
console.log("-----match함수-----");
result = s.match(/like/ig);   // g옵션 있을때 여러개 검색
console.log(result);    //배열로 알려줌 -> 몇번 등장했는지 알 수 있음

console.log("()로 서로 묶어주자 : group화");
s5= "홍길도의 전화번호는 010-0123-4567입니다. 우편번호 : 345-29";
regexp = /\d{3}-\d{4}-\d{4}/   // \d : 정수, {3} : 자릿수
console.log(regexp.exec(s5));     // 찾아낸 정보를 배열로 반환함
result = regexp.exec(s5);
console.log(result[0], result[1],result[2],result[3]);

regexp = /(?<ph1>\d{3})-(?<ph2>\d{4})-(?<ph3>\d{4})/;
console.log( regexp.exec(s1)); //찾아낸 정보를 배열로 반환한다
result = regexp.exec(s1);
console.log( result.groups["ph1"], result.groups["ph2"],
             result.groups["ph3"]);




