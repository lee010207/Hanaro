// 동기모드 : A, B, C 가 있으면 A를 시작하고 업무를 끝나고
// B를 시작하고 끝내고 C를 시작함 -> 일이 다 끝나야 다른 일 시작

/* 비동기모드 : A,B,C가 있으면
     A 시작 -> 안끝나도 함수 바로 리턴
     B 시작 -> 안끝나도 함수 바로 리턴
     C 시작 -> 안끝나도 함수 바로 리턴

     - 시스템이 백그라운드의 나머지 일을 끝냄
     - 작업이 완료되었음을 콜백함수로 알려줌
     - 완료된 일의 결과도 콜백함수를 통해 알려줌
    
     let result = callFunction();
     -> 결과가 반환값으로 전달되도록 구성함

     비동기모드
     callFunction(callbackFunc(){
        여기서 일이 완료되었음을 알 수 있음
        여기서 나머지 일을 처리해야 함
     });
     

*/
