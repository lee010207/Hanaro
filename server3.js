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

    let query = url.parse(req.url, true).query; //String
        //문자열을 jSON 형태로 변환
        
    pathName = url.parse(req.url).pathname;

    if(req.method == "GET" && pathName == "/"){
       //GET방식일 경우
        

        console.log(query["name"]);
        console.log(query["age"]);

            res.statusCode = 200;
            res.setHeader("Content-Type", "text-html");
            res.end(`<h1>${query.name} ${query.age}</h1>`);
     
    }else{
        // method 방식이 GET 이외 다른 방식일때
        res.setHeader("Content-Type", "text-html");
        res.end("<h1>post</h1>");
    }

});

server.listen(port, host, ()=>{
    console.log(`Server start at http://${host}:${port}`);
})