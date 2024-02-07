const http = require("http");
const host = "127.0.0.1";
const port = 4000;
const fs = require("fs");
const url = require("url");
// GET 방식으로 전달된 문자열을 parsing 해서 json으로 만들어줌

let server = http.createServer((req, res)=>{
   
    console.log(req.method);
    console.log(req.url);
    console.log(url.parse(req.url));
        
    pathName = url.parse(req.url).pathname;

    if(pathName == "/gugu"){
        // http://127.0.0.1:4000/gugu?dan=7
        gugu(req, res);
        // 함수 호출
    }else{
        // method 방식이 GET 이외 다른 방식일때
        res.setHeader("Content-Type", "text-html");
        res.end("<h1>post</h1>");
    }

});

server.listen(port, host, ()=>{
    console.log(`Server start at http://${host}:${port}`);
})

function gugu(req, res){
    let query = url.parse(req.url, true).query;
    let dan = query.dan;

    let result = "";
    for(i=1; i<=9; i++){
        result += `<p>${dan} x ${i} = ${dan*i}<p>`;
    }
    res.writeHead(200, {"Content-Type":"text-html"});
    // 얘가 전송하는 함수
    res.end(result);
    // 얘가 응답 종료하면서 데이터 내보내는 함수
}