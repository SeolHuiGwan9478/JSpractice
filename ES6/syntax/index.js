//삼항 연산자
const CUT_OFF = 80;

function passChecker(score){
    return score > CUT_OFF ? "합격!" : "불합격!";
}

//spread 구문
const introduce = (name, birth, job) => {
    console.log(`${name}`);
    console.log(`${birth}`);
    console.log(`${job}`);
}

const myArr = ['설희관', 2000, '한국외국어대학교 대학생'];
introduce(...myArr);

//spread 구문 잘못된 예시
//const numbers = [1];

//const number = ...numbers;

//spread 구문 배열 합치기
const arr1 = [1,2,3];
const arr2 = [4,5,6];

const arr3 = [...arr1, ...arr2];
console.log(arr3);