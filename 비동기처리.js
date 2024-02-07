// require : 외부모듈을 불러옴
// (java)import 구문 : 자바에서는 모듈을 불러오는 게 아니라
//                     java.lang.String 중에 String만 쓰면
//                     이미 메모리에 로딩되어 모듈을 import된 파일에서 찾아보는 거
// 노드나 파이썬에서 import모듈은 메모리로 가져옴!

let fs  = require("file");

fs.readFile("./test.txt", "utf-8", function(data){
   
    console.log(data);
});

console.log("완료");