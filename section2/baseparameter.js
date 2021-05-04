//함수의 기본 파라미터
function calculateCircleArea(r) {
    return Math.PI * r * r;
  }
  
  const area = calculateCircleArea();
  console.log(area); // NaN
  //매개변수로 아무것도 넘겨주지 않으면 undefined * undefined 가 되기 때문에
  //NaN이 될 수 밖에 없다.
//ES6버전 이전
function calculateCircleArea(r) {
  const radius = r || 1;
  return Math.PI * radius * radius;
}

const area = calculateCircleArea();
console.log(area); // 3.141592653589793

//ES6 버전 이후
//함수의 매개변수 디폴트 값을 설정 가능.
function calculateCircleArea(r = 1) {
    return Math.PI * r * r;
  }
  
  const area = calculateCircleArea();
  console.log(area); // 3.141592653589793
  
//화살표 함수로 표현
const calculateCircleArea = (r = 1) => Math.PI * r * r;
const area = calculateCircleArea();
console.log(area); // 3.141592653589793