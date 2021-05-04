//기존 다른 언어들의 for, while문 과 같음.
//for ... of
//for ... of 문은 배열에 관한 반복만을 돌리기 위해서 만들어진 반복문임.
let numbers = [10,20,30,40,50];
for (let number of numbers){
    console.log(number);
}

//객체를 위한 반복문 for...in
//객체를 위한 반복문을 알아보기 전에, 객체의 정보를 배열 형태로 받아올 수 있는 함수 몇 가지가 있음.
const doggy = {
    name: '멍멍이',
    sound: '멍멍',
    age:2
};

console.log(Object.entires(doggy));
console.log(Object.keys(doggy));
console.log(Object.values(doggy));

//Object.entires : [[키, 값], [키,값]]
//Object.keys : [키,키,키] 형태의 배열로 변환
//Object.values : [값,값,값] 형태의 배열로 변환

for (let key in doggy){
    console.log('${key}: ${doggy[key])');
}
//key 값을 반환.