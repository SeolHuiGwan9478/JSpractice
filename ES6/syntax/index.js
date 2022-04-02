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

//모던한 프로퍼티 표기법
const name = "Huigwan";
const birth = 2000;
const job = "Student";

const user = {
    name : name,
    birth: birth,
    job: job,
};

const user = {
    name,
    birth,
    job,
};

console.log(user);

//모던한 프로퍼티 표기법2
function getFullName(){
    return `${this.firstName} ${this.lastName}`;
};

const user = {
    firstName: 'Alex',
    lastName: 'Kim',
    getFullName,
};

const admin = {
    firstName: 'Tess',
    lastName : 'Jang',
    getFullName,
};

console.log(user.getFullName());
console.log(admin.getFullName());

//모던한 프로퍼티 표기법
    //객체 프로퍼티로서의 함수 작성 시 ":"과 function 생략 가능
const user = {
    firstName: 'Seol',
    LastName: 'Huigwan',
    getFullName: function() {
        return `${this.firstName} ${this.lastName}`
    },
};

const user = {
    firstName: 'Seol',
    LastName: 'Huigwan',
    getFullName() {
        return `${this.firstName} ${this.lastName}`
    },
};
//구조 분해(Destructing)
const rank = ['유나', '효준', '민환', '재하'];

// const macbook = rank[0];
// const ipad = rank[1];
// const airpods = rank[2];
// const common = rank[3];
const [macbook, ipad, airpods, common] = rank;

//구조 분해 할 배열이 더 크기가 클 경우
const rank2 = ['유나', '효준', '민환', '재하'];
const [macbook, ipad, airpods, ...coupon] = rank;

//구조 분해 할 배열이 더 크기가 작을 경우
const rank3 = ['유나','효준', '민환'];
const [macbook, ipad, airpods, coupon="없음"] = rank;

//객체 구조 분해
const macbook = {
    title : '맥북 프로 16형',
    price : 3690000,
    memory : '16GB',
    storage : '1TB SSD 저장 장치',
    display : '16형 Retinal 디스플레이'
};

//const title = macbook.title:
//const price = macbook.price;

const {title, price, ...rest} = macbook;
console.log(title);
console.log(price);

const {title:product, price, ...rest} = macbook;
console.log(product);

//함수와 구조분해
function getArray(){
    return ['컴퓨터', '냉장고', '세탁기'];
}
const [el1, el2, el3] = getArray();

function getObject(){
    return {
        name : 'Huigwan',
        birth: 2022,
        job : 'student',
    };
}
const {name, birth, job} = getObject();

//함수와 구조분해 2
function printWinner(...arg){
    const [macbook, ipad, airpods, ...coupon] = arg;
    console.log(`${macbook}`);
    console.log(`${ipad}`);
    console.log(`${airpods}`);
}

function printWinner([macbook, ipad, airpods, ...coupon]){
    console.log(`${macbook}`);
    console.log(`${ipad}`);
    console.log(`${airpods}`);
}

printWinner('효준', '효신', '재훈', '소원', '현승','희관');

//함수와 구조분해3
const macbook = {
    title : '맥북 프로 16형',
    price : 3690000,
    color : 'silver',
    memory : '16GB',
    storage : '1TB SSD 저장 장치',
    display : '16형 Retinal 디스플레이'
};

function printSummary({title, color, price}){
    console.log(title);
    console.log(color);
    console.log(price);
}

//함수와 구조분해4
const btn = document.querySelector('#btn');

btn.addEventListener('click', (event) => {
    event.target.toggle('checked');
})

btn.addEventListener('click', ({target}) => {
    target.toggle('checked');
})

//에러와 에러 객체
console.log('시작!');

const error = new TypeError('타입 에러가 발생했습니다.');

throw error;

console.log(error.name);
console.log(error.message);

console.log('끝!');

//try catch 문
try {
    console.log('에러 전');

    const huigwan = 'Huigwan';
    console.log(huigwan);

    huigwan = '희관'; //에러 발생 부분

    const language = 'JavaScript';
    console.log(language);
}catch (error){
    console.log('에러 후');
    console.log(error);
    console.log(error.name);
    console.log(error.message);
}

//try catch 활용하기
function printMembers(members){
    try{
        for(const member of members){
            console.log(member);
        }
    }catch(err){
        console.error(err);
        alert(`${err.name}가 발생했습니다. 콘솔창을 확인해주세요.`);
    }
}

const teamA = ["희관","우성","규민","지석"];
printMembers(teamA);

const error_team = {name:'huigwan'};
printMembers(error_team);

const teamB = ["재윤","태환", "성환", "주연"];
printMembers(teamB);