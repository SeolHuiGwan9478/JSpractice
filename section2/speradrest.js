//이번 ES6에서 도입된 rest 문법.
//객체나 배열에서 기존의 객체나 배열을 건들이지 않고, 재사용하기 위함.

const slime = {
    name: '슬라임'
};

const cuteslime = {
    ...slime,
    attribute: 'cute'
};

const purplecuteslime = {
    ...cuteslime,
    color: 'purple'
};

console.log(slime);
console.log(cuteslime);
console.log(purplecuteslime);

const numbers = [1, 2, 3, 4, 5];

const spreadNumbers = [...numbers, 1000, ...numbers];
console.log(spreadNumbers); // [1, 2, 3, 4, 5, 1000, 1, 2, 3, 4, 5]

//rest 문법
//객체와 배열의 비구조화 할당 그리고 함수의 파라미터에서 사용.
const purpleCuteSlime = {
    name: '슬라임',
    attribute: 'cute',
    color: 'purple'
  };
  
  const { color, ...rest } = purpleCuteSlime;
  console.log(color);
  console.log(rest);

//배열에서의 rest
const numbers = [0, 1, 2, 3, 4, 5, 6];

const [one, ...rest] = numbers;

console.log(one);
console.log(rest);

//함수 파라미터의 rest 적용
//함수 파라미터로 몇 개를 받아야할지 모를 때 사용.
//rest는 파라미터들의 배열이 된다.
function sum(...rest){
    return rest
}

function sum(...rest) {
    return rest.reduce((acc, current) => acc + current, 0);
  }
  
  const result = sum(1, 2, 3, 4, 5, 6);
  console.log(result); // 21

//함수에서 값을 읽을 때, 그 값을 파라미터라고 하고 그리고 함수에서 값을 넣어줄 때, 그 값들은 인자라고 부른다.
//spread로 함수의 인자 부분에 배열을 spread하면 사용하기 편하다
function sum(...rest){
    return rest.reduce((acc, current) => acc + current, 0);
}

const numbers = [1,2,3,4,5,6];
const result = sum(...numbers);
console.log(result);

