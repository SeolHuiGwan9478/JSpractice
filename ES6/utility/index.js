//forof, forEach, map
const members = ['영훈', '윤수', '희관', '우성'];

for(let member of memebers){
    console.log(`${member}님이 입장하셨습니다.`);
}

//forEach와 map은 각 배열에 있는 프로퍼티
members.forEach((member) => {
    console.log(`${member}님이 입장하셨습니다.`);
});
members.forEach((member, i) => {
    console.log(`${i} ${member}님이 입장하셨습니다.`);
});

//map
const firtNames = ['영훈', '윤수', '희관', '우성']
const lastNames = ['강', '이', '설', '신'];

const fullNames = firstNames.map((firstNames, i) => {
    return lastNames[i] + firstNames;
})

members.forEach((member) => {
    console.log(`${member}님이 입장하셨습니다.`);
    members.push('주연');
});

console.log(members);

//filter와 find
const devices = [
    { name: 'GalaxyNote', brand: 'Samsung'},
    { name: 'MacbookPro', brand: 'Apple'},
    { name: 'iPad', brand: 'Apple'},
    { name: 'GalaxyWatch', brand: 'Samsung'},
    { name: 'Gram', brand: 'LG'},
    { name: 'GalaxyBook', brand: 'Samsung'},
    { name: 'SurfacePro', brand: 'MS'},
    { name: 'MacbookAir', brand: 'Apple'},
];

const apples = devices.filter((el) => el.brand === 'Apple');

console.log(apples);

const myLaptop = devices.find((el) => el.name === 'Gram');

console.log(myLaptop);

//some & every
const numbers = [1,3,5,7,9];

//some : 조건을 만족하는 요소가 1개 이상 있는지
const someReturn = numbers.some((el, i) => {
    console.log('some: ', i);
    return el > 5;
});

//every: 조건을 만족하지 않는 요소가 1개 이상 있는지
const everyReturn = numbers.every((el, i) => {
    console.log('every: ', i);
    return el > 5;
});

console.log('some: ', someReturn);
console.log('every: ', everyReturn);

//reduce 함수
const numbers = [1,2,3,4];

numbers.reduce((acc, el, i, arr) => {
    return nextAccValue;
}, initialAccValue);

//reduce 함수 사용 예시
const numbers = [1,2,3,4];

const sumAll = numbers.reduce((acc, el, i) => {
    console.log(`${i}번 index의 요소로 콜백함소가 동작중입니다.`);
    console.log('acc:', acc);
    console.log('el:', el);
    console.log('----------');

    return acc + el;
}, 0);

console.log('sumAll:', sumAll);

//sort
const letters = ['D', 'C', 'E', 'B', 'A'];
const numbers = [1, 10, 4, 21, 36000];

letters.sort();
numbers.sort();

console.log(letters); // (5) ["A", "B", "C", "D", "E"]
console.log(numbers); // (5) [1, 10, 21, 36000, 4]

//sort 수정
const numbers = [1, 10, 4, 21, 36000];

// 오름차순 정렬
numbers.sort((a, b) => a - b);
console.log(numbers); // (5) [1, 4, 10, 21, 36000]

// 내림차순 정렬
numbers.sort((a, b) => b - a);
console.log(numbers); // (5) [36000, 21, 10, 4, 1]

//reverse
const letters = ['a', 'c', 'b'];
const numbers = [421, 721, 353];

letters.reverse();
numbers.reverse();

console.log(letters); // (3) ["b", "c", "a"]
console.log(numbers); // (3) [353, 721, 421]