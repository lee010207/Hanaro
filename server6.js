const http = require("http");
const host = "127.0.0.1";
const port = 4000;
const fs = require("fs");
const url = require("url");
// html파일을 읽어서 ejs엔진을 통해 자바스크립트 객체와 html을
// 결합해서 새로운 html을 만들어 보내야 함
// npm install ejs -- 별도 설치 필요

const ejs = require("ejs");
const functionMap = [
    {path:"/input", func:add_input},
    {path:"/output", func:add_output}
];

let server = http.createServer((req, res)=>{
  if(req.method == "GET"){
    let pathName = url.parse(req.url, true).pathname;
    let idx = functionMap.findIndex(item => item.path == pathName);
    if(idx==-1){
        res.writeHead(404, {"Content-Type":"text-html"});
        res.end("<h1>ERROR PAGE</h1>");
        return;
    }
    functionMap[idx].func(req,res);
  }
});

server.listen(port, host, ()=>{
    console.log(`Server start at http://${host}:${port}`);
});


function add_input(req, res)
{
    console.log("input함수 실행");
    fs.readFile("./html/input.html", "utf-8", function(error, data){
        if(error)
        {
            console.log( error );
            res.setHeader("Content-Type", "text/html");
            res.end("<h1>Error</h1>");
            return;
        }
        res.writeHead(200, {"Content-Type":"text/html"});
        //data = data.replace("{{title}}", "Hello");
        //ejs엔진이 동적인 웹페이지를 만든다.
        data = ejs.render(data,);
        res.end( data );
    });
}
function add_output(req, res)
{
    console.log("output함수 실행");
    let params = url.parse(req.url, true).query;
    console.log(params);
    fs.readFile("./html/output.html", "utf-8", function(error, data){
        if(error)
        {
            console.log( error );
            res.setHeader("Content-Type", "text/html");
            res.end("<h1>Error</h1>");``
            return;
        }
        res.writeHead(200, {"Content-Type":"text/html"});
        //data = data.replace("{{title}}", "Hello");
        //ejs엔진이 동적인 웹페이지를 만든다.
        data = ejs.render(data, {x:params.x, y:params.y, result:parseInt(params.x)+parseInt(params.y)});
        //보내줄 데이터가 있으면 쿼리 받아와서 렌더링해줌
        res.end( data );
    });
}