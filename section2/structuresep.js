//비구조화 할당(구조분해) 문법, 파이썬에서 언패킹과 비슷
const object = {a:1, b:2};

const {a, b} = object;

console.log(a);
console.log(b);

//함수 파라미터 비구조화 할당
function print({a,b}){
    console.log(a);
    console.log(b);
}

print(object);

//만약 object의 b가 주어지지 않았다고 가정
//비구조화 할당시 기본값 설정
const object = {a:1};

function print({a, b = 2}){
    console.log(a);
    console.log(b);
}

print(object);

const object = {a:1};

const {a, b=2} = object;

console.log(a);
console.log(b);

//비구조화 할당시 이름 바꾸기
//비구조화 할당을 하는 과정에서 선언 할 값의 이름을 바꾸는 방법
const animal = {
    name: '멍멍이',
    type: '개'
};

const {name:nickname} = animal;
console.log(nickname);

//배열 비구조화 할당
const array = [1,2];
const [one, two] = array;

console.log(one);
console.log(two);

//깊은 값 비구조화 할당
const deepObject = {
    state: {
      information: {
        name: 'velopert',
        languages: ['korean', 'english', 'chinese']
      }
    },
    value: 5
  };

const {name, languages} = deepObject.state.information;
const {value} = deepObject;

const extracted = {
    name,
    languages,
    value
};

console.log(extracted); // {name: "velopert", languages: Array[3], value: 5}
//만약에 key 이름으로 선언된 값이 존재하다면, 바로 매칭시켜주는 문법 extracted 객체를 보면 알 수 있음.

//한번에 추출하기
const{
    state:{
        information: {name,languages}
    },
    value
} = deepObject;