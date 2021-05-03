// 객체는 하나의 이름에 여러 종류의 값을 넣을 때 사용
let dog = {
    name: '멍멍이',
    age: 2
};

console.log(dog.name);
console.log(dog.age);
// 파이썬의 딕셔너리와 같이 key와 value로 이루어져 있다.
// key의 값은 공백이 없어야 하는데 만약 공백을 쓰려면 문자열로 사용
let sample = {
    'key with space': true
};

//함수에서 객체를 파라미터로 받기
const ironman = {
    name: '토니 스타크',
    actor: '로버트 다우니 주니어',
    alias: '아이언맨'
};

function print(hero){
    let text = '${hero.alias}(${hero.name}) 역할을 맡은 배우는 ${hero.actor} 입니다.';
    console.log(text);
}

print(ironman);

//객체 비구조화 할당 (= 객체 구조 분해)
function print(hero){
    let {alias, name, actor} = hero;
    let text = '${alias}(${name}) 역할을 맡은 배우는 ${actor} 입니다.';
    console.log(text);
}

print(ironman);

//객체 안에 함수 넣기
const dog = {
    name:'멍멍이',
    sound: '멍멍!',
    say: function say() {
        console.log(this.sound);
    }
};

dog.say();

//함수가 객체 안에 들어가게 되면 this는 자신이 속해 있는 객체를 가르킴.
//함수를 선언 할 때에는 이름이 없어도 된다.
const dog = {
    name:'멍멍이',
    sound: '멍멍!',
    say: function() {
        console.log(this.sound);
    }
};
//객체 안에 화살표 함수는 선언 불가

//getter과 setter - 데이터 프로퍼티가 아닌 접근 프로퍼티
//객체의 값을 바꾸거나 조회하려 할 때 우리가 원하는 코드를 실행 시킬 수 있다.
//default로 getter와 setter는 생긴다.
const numbers = {
    _a:1,
    _b:2,
    
    get sum(){
        console.log('sum 함수가 실행됩니다.');
        return this._a + this._b;
    }
};
console.log(numbers.sum);