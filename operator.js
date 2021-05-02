//대입 연산자
let value = 1;
//산술 연산자
let a = 1 + 2;
console.log(a);
a = 1 + 2 - (3 * 4) / 4;
console.log(a);
console.log(a++);
console.log(++a);
//논리 연산자
const b = !true;
console.log(b);
const c = !false;
console.log(c);

let f = false && false;
f = false && true;
f = true && false;

let t = true || false;
t = false || true;
t = true || true;

//연산 순서 NOT -> AND -> OR

//비교 연산자 === 사용. ==을 사용하면 두 값의 데이터 타입 검사를 하지 않음
const a = 1;
const b = 1;
const equals = a == b;
console.log(equals);

//문자열 붙이기
const a = '안녕';
const b = '하세요';
console.log(a + b); // 안녕하세요