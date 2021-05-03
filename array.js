//기존 다른 언어들의 배열과 같음
// 배열에 새 항목 추가하기, push 함수 사용하기.
const objects = [{name:'멍멍이'}, {name: '야옹이'}];

objects.push({
    name:'멍뭉이'
});

console.log(objects);

//배열의 크기 알아내기
console.log(objects.length);

//배열에 관련된 내장함수
//forEach는 함수의 파라미터로 각 원소에 대하여 처리하고 싶은 코드를 함수로 넣어줌.
// 이 함수의 파라미터 hero는 각 원소를 가르키게 된다.
const superheroes = ['아이언맨', '캡틴 아메리카', '토르', '닥터 스트레인지'];

superheroes.forEach(hero => {
  console.log(hero);
});

//map
//map 함수의 파라미터로는 변화를 주는 변화함수를 사용. 
const array = [1,2,3,4,5,6,7,8];
const square = n => n*n;
const squared = array.map(square);
console.log(squared);
//또는 
const squared = array.map(n => n * n);
console.log(squared);

//indexOf
//해당 원소의 index 반환
const superheroes = ['아이언맨', '캡틴 아메리카', '토르', '닥터 스트레인지'];
const index = superheroes.indexOf('토르');
console.log(index);

//findIndex
//만약 배열 안의 원소가 숫자, 문자열 또는 불리언이라면 찾고자 하는 항목의 인덱스를
//indexOf로 찾을 숭 있지만 배열의 원소가 객체 또는 배열이면 indexOf로 찾을 수 없다.
//findIndex 함수에 검사하고자 하는 조건을 반환하는 함수를 넣어서 찾기 가능.
const todos = [
    {
      id: 1,
      text: '자바스크립트 입문',
      done: true
    },
    {
      id: 2,
      text: '함수 배우기',
      done: true
    },
    {
      id: 3,
      text: '객체와 배열 배우기',
      done: true
    },
    {
      id: 4,
      text: '배열 내장함수 배우기',
      done: false
    }
  ];
  
  const index = todos.findIndex(todo => todo.id === 3);
  console.log(index);

  //find는 findIndex와 같지만 찾아낸 값이 몇번째인지 알아내는 것이 아니라, 찾아낸 값 자체를 반환.
  const todos = [
    {
      id: 1,
      text: '자바스크립트 입문',
      done: true
    },
    {
      id: 2,
      text: '함수 배우기',
      done: true
    },
    {
      id: 3,
      text: '객체와 배열 배우기',
      done: true
    },
    {
      id: 4,
      text: '배열 내장함수 배우기',
      done: false
    }
  ];
  
  const todo = todos.find(todo => todo.id === 3);
  console.log(todo);

  //filter
  //inddexOf는 맨 처음 조건을 만족하는 것을 반환한다면 filter는
  //조건을 만족하는 값들을 모두 추출하여 새로운 배열을 만들어 반환
  const todos = [
    {
      id: 1,
      text: '자바스크립트 입문',
      done: true
    },
    {
      id: 2,
      text: '함수 배우기',
      done: true
    },
    {
      id: 3,
      text: '객체와 배열 배우기',
      done: true
    },
    {
      id: 4,
      text: '배열 내장함수 배우기',
      done: false
    }
  ];
  
  const todo = todos.find(todo => todo.id === 3);
  console.log(todo);

  //splice
  //배열에서 원소를 지울 때 사용.
  //첫 번째 매개변수는 지울 index, 두 번째 매개변수는 그 인덱스로부터 몇 개 지울지
const numbers = [10, 20, 30, 40];
const index = numbers.indexOf(30);
numbers.splice(index, 1);
console.log(numbers);

//slice
//기존의 배열을 건드리지 않고, 새로운 배열을 만듦. 파이썬의 slicing과 같음.
const numbers = [10, 20, 30, 40];
const sliced = numbers.slice(0, 2); // 0부터 시작해서 2전까지

console.log(sliced); // [10, 20]
console.log(numbers); // [10, 20, 30, 40]

//shift 와 pop
//shift는 배열의 맨 첫 번째 원소 제거 후 반환, pop은 배열의 맨 마지막 원소 제거 후 반환
const numbers = [10, 20, 30, 40];
const value = numbers.shift();
const numbers = [10, 20, 30, 40];
const value = numbers.pop();

//unshift는 shift의 반대이자 push의 반대
//배열의 맨 앞에 원소를 추가
const numbers = [10, 20, 30, 40];
numbers.unshift(5);
console.log(numbers);

//concat
//concat은 여러개의 배열을 하나의 배열로 합친다. 기존 배열에는 영향 x
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const concated = arr1.concat(arr2);

console.log(concated);

//join
//join은 배열 안의 값들을 문자열 형태로 합쳐준다.
const array = [1, 2, 3, 4, 5];
console.log(array.join()); // 1,2,3,4,5
console.log(array.join(' ')); // 1 2 3 4 5
console.log(array.join(', ')); // 1, 2, 3, 4, 5
//매개변수로 아무것도 넘겨주지 않으면 default로 ,로 합쳐짐.

//reduce 함수에는 2개의 파라미터가 전달된다. 첫 번째는 콜백 함수. 두 번째는 reduce 함수에서 사용할 초기 값이다.
const numbers = [1, 2, 3, 4, 5];
let sum = numbers.reduce((accumulator, current) => {
  console.log({ accumulator, current });
  return accumulator + current;
}, 0);

console.log(sum);
//accmulator는 누적된 값을 의미.

//reduce 함수에서 사용한 콜백함수에서는 추가 파라미터로 index와 array를 받을 수 있다.
//index는 현재 처리하고 있는 항목이 몇번째인지 가르키고, array는 현재 처리하고 있는 배열 자신을 의미.
const numbers = [1, 2, 3, 4, 5];
let sum = numbers.reduce((accumulator, current, index, array) => {
  if (index === array.length - 1) {
    return (accumulator + current) / array.length;
  }
  return accumulator + current;
}, 0);

console.log(sum);