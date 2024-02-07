// privateuser는 블럭안에서만 존재하는 상수
// 객체 자체는 힙에 있고 블럭을 따로 정의하면 블럭내에서만 존재함

{
    // 블럭안에
    const privateuser = {name:"Mimi", age:"23"};
}

// 함수 안에 함수를 만들 수 있다. 외부함수와 내부함수가 있다
// 외부함수의 반환값에 내부함수의 주소를 반환함

function myCounter(){
    let count =0; // 지역변수
    function increase(){
        // myCounter 함수내의 지역변수에 대한 접근이 가능함
        count++;
        return count;
    }
    return increase();
    // 내부함수를 외부로 반환함
}

const counter1 = myCounter();
// counter1에는 counter 지역변수와 increase라는 함수가 존재
// counter1에는 increase함수주소, 함수를 실행하면 return increase를 만남
// 그래서 increase 함수 참조가 counter1이 됨
console.log(counter1);
// 장점 : 서로 오염이 되지 않음 -> 각각 독립적

const counter2 = myCounter();
console.log(counter2);

// 모든 함수는 반환값이 하나여야 함
// JSON을 사용하면 JSON객체 자체는 하나이므로 문법상 아무 문제가 없고

