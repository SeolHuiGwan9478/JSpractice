// index.html에서 보면 각 태그에 id를 설정해주었는데 id 값을 설정해주면
// JS에서 쉽게 해당 DOM을 선택할 수 있다. 여기서 DOM이란, 각 태그에 대한 정보를 지니고 있는 JavaScript 객체이다.
const number = document.getElementById("number");
const increase = document.getElementById("increase");
const decrease = document.getElementById("decrease");

console.log(number);
console.log(increase);
console.log(decrease);

console.log(number.innerText); // 내용
console.log(increase.offsetTop); // top 위치
console.log(decrease.id); // id

//이벤트 설정하기. DOM 이벤트를 설정하기. dom에 이벤트를 설정할 때에는 on이벤트이름 값에 함수를 설정해주면 된다.
//https://developer.mozilla.org/ko/docs/Web/Events 이벤트 종류는 다양함.
const number = document.getElementById("number");
const increase = document.getElementById("increase");
const decrease = document.getElementById("decrease");

increase.onclick = () => {
  console.log("increase 가 클릭됨");
};

decrease.onclick = () => {
  console.log("decrease 가 클릭됨");
};

const number = document.getElementById("number");
const increase = document.getElementById("increase");
const decrease = document.getElementById("decrease");

increase.onclick = () => {
  const current = parseInt(number.innerText, 10);
  number.innerText = current + 1;
};

decrease.onclick = () => {
  const current = parseInt(number.innerText, 10);
  number.innerText = current - 1;
};

//parseInt 는 문자열을 숫자로 변환해주는 함수임. 두번째 10을 넣어준 것은, 10진수로 숫자를 받아오겠다는 의미임.
//id가 아닌 클래스로 DOM을 선택하고 싶을땐 document.getElementByClassName 또는 document.querySelector를 사용하면 된다.
//document.querySelector를 사용하여 class 값으로 DOM을 선택할 때에는 텍스트 앞에 .을 붙여주어야 함.