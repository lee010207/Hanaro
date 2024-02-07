reg = /cat/;
// reg = new RegExp(/cat/); 요거랑 같음

let set1 = "I like mt cat";
let set2 = "I love my dog";
let set3 = "you love my dog and Cat";
console.log(reg.test(set1), reg.test(set2));
// 문장에 cat이라는 단어가 들어가 있으면 true, x면 false

reg = /cat/i;
// 대소문자 관계없이
console.log(reg.test(set1), reg.test(set2), reg.test(set3));

reg = /cat$/i;
// 대소문자 관계없이 cat으로 끝나면 true
console.log(reg.test(set3));

reg = /c.t/;
// c 하고 t 사이에 한글자만 (줄바꿈을 제외한 모든 문자) : 문장을 통으로 인식해서 그 안에서 판별
console.log(reg.test("ct"));     // c 랑 t 사이에 한글자가 없어서 false
console.log(reg.test("cat"));    // true
console.log(reg.test("c@t"));        // true
console.log(reg.test("cccct"));        // 뒤쪽에 cct를 인식하고 true 
console.log(reg.test("c3!@~#$%^&c-t"));       // clt -> true

reg = /l....l/;  // l로 시작해서 4글자가 사이에 있고 l로 끝나는
console.log(reg.test("lol"));      //false
console.log(reg.test("l1234l"));     // true
console.log(reg.test("llkoklkokol"));    // true
console.log(reg.test("l---llllll"));     // true

reg = /^KkcC]/;
// K나 k나 c나 C로 시작하는 거

// a[0123456789]b -> a[0-9b]
// 숫자 앞뒤로 a와 b가 있는

/*
 * [^0-9]  :  숫자를 배제하고
 * [] 기호랑 쓰일 떄 ^ 다른 의미를 갖음
 * ^[0-9]  : 숫자로 시작하는
 * ^[^0-9] : 숫자로 시작하는 것을 제외하고(첫글자가 숫자면 안됨)
 */

console.log("/a[^0-9]b/  :  a와 b 사이에 숫자를 제외한 글자가 하나 존재해야함");
console.log("/a[^0-9]b/", /a[^0-9]b/.test("a$b"));     // true
console.log("/a[^0-9]b/", /a[^0-9]b/.test("a3b"));     // false
console.log("/a[^0-9]b/", /a[^0-9]b/.test("ayyb"));    // false
console.log("/a[^0-9]b/", /a[^0-9]b/.test("aaaafe8enakb"));    //true

// 첫글자가 숫자면 안될 때 - 첫글자만 ^[^0-9]
console.log("/^[^0-9]/ : 숫자가 아닌 첫글자"); 
console.log(/^[^0-9]/, /^[^0-9]/.test("1abc"));         // false
console.log(/^[^0-9]/, /^[^0-9]/.test("a241231bc"));    // true
console.log(/^[^0-9]/, /^[^0-9]/.test("1132432abc"));   // false
console.log(/^[^0-9]/, /^[^0-9]/.test("##ab12c"));      // true


// 문자가 하나라도 있으면 true
// /[^0-9]/
// 숫자가 하나라도 있으면 true
// /[0-9]/

// * : 0번이상 반복되는
// /a*b/
// a라는 글자가 b앞에 0번 있거나 1번 있거나 n번 있으면 true
// a* : a가 0번이상 반복되면
console.log("/a*b/" , /a*b/.test("b"));      // true
console.log("/a*b/" , /a*b/.test("ab"));     // true
console.log("/a*b/" , /a*b/.test("aaaab"));  // true

// + : 1번 이상 반복되는
// a+ : a가 0번이상 반복되는
console.log("/a+b/", /a+b/.test("b"));      // false
console.log("/a+b/", /a+b/.test("aab"));    // true

// n번 반복
console.log("/[0-9]{3}/", /[0-9]{3}/.test("1abc"));
console.log("/[0-9]{3}/", /[0-9]{3}/.test("123abc"));
console.log("/[0-9]{3}/", /[0-9]{3}/.test("ab123c"));
console.log("/[0-9]{3}/", /[0-9]{3}/.test("a19bc"));
console.log("/[0-9]{3}/", /[0-9]{3}/.test("aaa19bbgg67bc"));

/*
 * \w : 문자
 * \d : 숫자
 * \b : 시작과 끝이 같은 형식일 때
 */

function ValidateEmail(mail)
{
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value))
    {
        return (true)
    }
    return (false)
}