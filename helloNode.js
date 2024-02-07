// WAS가 없어서 서버를 직접 만들어줌
// 실제로는 이렇게 일일이 만들진 않고 이 기술을 활용해서 react 요런거 만든대...?

// node.js를 사용해 HTTP서버 생성하기

let http = require("http");
// http 프로토콜을 지원하는 모듈 불러오기

let server = http.createServer(function(request, response){
    // 서버가 요청을 처리하는 콜백 함수 -> 클라이언트 요청과 응답 처리
    response.writeHead(200, {"Content-Type": "text-html"});
    response.end("<h1>Hello</h1>");
});

// createServer 함수는 서버객체를 생성함
// 생성된 객체를 이용해 클라이언트가 접속해 오길 기다림
// 클라이언트가 접속해오면 createServer함수에서 콜백함수를 호출함

server.listen(3000, ()=>{
    // 서버 시작,연결 및 포트 지정(매개변수로 -> 3000)
    console.log("서버 시작");
});

// 서버가 클라이언트로부터 요청을 받을 준비를 함
// listen : 대기상태로 돌아감