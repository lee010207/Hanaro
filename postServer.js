const http = require("http");
const host = "127.0.0.1";
const port = 4000;
const fs = require("fs");
const url = require("url");
// GET 방식으로 전달된 문자열을 parsing 해서 json으로 만들어줌

let server = http.createServer((req, res)=>{
   
    console.log(req.method);

    if(req.method == "POST"){
       //GET방식일 경우
        callProcess(req,res);
     
    }else{
        // method 방식이 GET 이외 다른 방식일때
        res.setHeader("Content-Type", "text-html");
        res.end("<h1>post</h1>");
    }

});

server.listen(port, host, ()=>{
    console.log(`Server start at http://${host}:${port}`);
})

function callProcess(req,res){
    // POST 방식은 body에서 별도로 데이터를 처리해야함
    let body = "";
    req.on("data", (data)=>{
        body+=data;
    })

    req.on('end', ()=>{
        var data = new url.URLSearchParams(body.toString());

        console.log("name " + data.get("name"));
        console.log("age " + data.get("age"));

        res.writeHead(200, {"Content-Type":"text-html"});
        var result = `<h1>이름: ` + data.get("name") + `</h1>`;
        result += `<h1>나이: ` + data.get("age") + `</h1>`;
        res.end(result);

    })
}