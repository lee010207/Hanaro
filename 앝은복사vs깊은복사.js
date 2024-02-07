food = ["strawberry", "Kimchi", "bibimbab", "sogogi"];

food3 = [];;
// 새로운 객체가 만들어짐
for(i=0; i<food.length; i++){
    food3.push(food[i]);
}
// food를 가져와서 push 하면 food3 빈배열에 복사됨

food3[0] = "Tomato";
console.log(food, food3);

// 깊은 복사 연산자
let food4 = [...food];
food4[0] = "오렌지";
console.log(food, food4);

// 해체
let userInfo = {"username":"Hihi", "age":990, "phone":"010-2837-2842"};
//const {username, age, phone} = userInfo;
//console.log(username);
//console.log(age);
//console.log(phone);
// 키값이랑 변수명이랑 같아야 해당 값이 변수에 담김
// 키값 == 변수명

const {username, ...userInfo2} = userInfo;
console.log(username, userInfo2);
// 나머지는 다 userInfo2에 담김!

let arr = [1,2,3,4,5];
let [a,b,....c];
[a,b] = [b,a]; // 서로 값 바꿈
console.log(a,b);
console.log(typeof[a,b]);