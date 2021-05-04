//함수는 특정 코드를 하나의 명령으로 실행할 수 있게 해주는 기능
// fucntion 키워드를 사용하며, 파라미터를 받는다.
function hello(name){
    console.log("Hello" + name + '!');
}
hello('SeolHuiGwan');

//화살표 함수
//function 키워드 대신에 => 문자를 사용해서 함수를 구현.
//화살표의 좌측에는 함수의 파라미터, 화살표의 우측에는 코드 블록이 들어옴.
const add = (a,b) => {
    return a + b;
};

const sub = (a,b) => a-b;