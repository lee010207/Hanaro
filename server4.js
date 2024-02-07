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

    var pathName = url.parse(req.url).pathname;
    let query = url.parse(req.url, true).query;  //String
    
    if(pathName == "/"){
       //GET방식일 경우
        // JSON -> 요소에 접근할 떄 ob["키값"] 또는 ob.키값
        // 키값에 하이픈이 들어있으면 X -> 자바는 변수명에 - 못씀(무조건 대괄호로)
        // ob["name"] / ob.name 둘다 (O)
        // ob["user-name"] (X)

        console.log(query["name"]);
        console.log(query["age"]);

            res.statusCode = 200;
            res.setHeader("Content-Type", "text-html");
            res.end(`<h1>${query.name} ${query.age}</h1>`);
     
    }else if(pathName == "/add"){  // Spring에서 DispatchServlet 클래스 역할
        // http://127.0.0.1:4000/add?x=4&y=9
        let x = parseInt(query.x);
        let y = parseInt(query.y);

        res.writeHead(200, {"Content-Type":"text-html"});
        res.end(`<h1>${x} + ${y} = ${x+y}</h1>`);
    }else{
        res.setHeader("Content-Type", "text-html");
        res.end("<h1>post</h1>");
    }

});

server.listen(port, host, ()=>{
    console.log(`Server start at http://${host}:${port}`);
})