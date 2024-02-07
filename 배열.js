// 배열 복사 -> 깊은 복사 , 얕은 복사
let a = [1,2,3,4,5];
let b = ["a", "b", "c"];
let c = null;

console.log(a.length);
console.log(b.length);
//console.log(c.length);  // TypeError : null속성의 length값은 못읽는다

console.log(c?.length); // undefined
// 객체? : 이렇게 ?를 붙여주면 undefined 출력(에러 안남) -> 이 객체참조변수가 null값일 수 있음

// if문 안쓰고 null인지 확인 -> null이면 []줘서 객체 할당함
c = c ?? [];
console.log("c 배열의 크기 : ", c.length);