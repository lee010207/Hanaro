let fs =require("fs");
let result = fs.readFile("test.js", "utf-8", (err, data)=>{
    if(err)// err != null
    {
        console.log(err);
        return;
        // 함수 끝냄
    } 
    console.log(data);
    // 내가 가져오고자 하는 파일(동기모드.js) 전체 내용이 data 변수에 담김
});

console.log(result);
console.log("END");