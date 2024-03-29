const http = require("http");
const { hostname } = require("os");
const host = "127.0.0.1";
const port = 4000;

let server = http.createServer((req, res)=>{
    // 브라우저에서 서버로 접근하면 이 함수가 호출됨
    // req : request 객체 - 브라우저에서 보내는 요청 정보를 담고 있는 객체
    // res : 서버에서는 response객체에 정보를 담아 브라우저로 전송함
    res.statusCode = 200;
    // 접속이 성공하고 올바른 정보를 전송할 때 200을 보냄
    res.setHeader("Content-Type", "text-html");
    res.end("<h1>This is First Server</h1>");

    // end 함수가 호출되면 더이상 브라우저로 정보를 전송해서는 안됨
    // 보내고자 하는 정보가 많을 때는 write 함수를 이용해 정보를 계속 보내고
    // 마지막에 end 함수를 호출해야함

});

server.listen(port, host, ()=>{
    console.log(`Server start at http://${host}:${port}`);
})