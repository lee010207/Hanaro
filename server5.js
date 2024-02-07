const http = require("http");
const host = "127.0.0.1";
const port = 4000;
const fs = require("fs");
const url = require("url");
// html파일을 읽어서 ejs엔진을 통해 자바스크립트 객체와 html을
// 결합해서 새로운 html을 만들어 보내야 함
// npm install ejs -- 별도 설치 필요

const ejs = require("ejs");

let server = http.createServer((req, res)=>{
   
    fs.readFile("./html/test.html", "utf-8", function(err, data){
        if(err){
            console.log(err);
            res.setHeader("Content-Type", "text-html");
            res.end("<h1>ERROR</h1>");
            return;
        }
        res.writeHead(200, {"Content-Type":"text-html"});
        //data = data.replace("{{title}}", "Hello");
        data = ejs.render(data, {title:"Hello" , "content":"nicetomeetyou",food:["딸기", "바나나", "포도"]});
        // title이란 키로 Hello라는 값을 보냄
        // JSON 형식으로 보내는 거
        // 이중 가로 해도되고 안해도 됨
        res.end(data);
    });

});

server.listen(port, host, ()=>{
    console.log(`Server start at http://${host}:${port}`);
})