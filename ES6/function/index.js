//함수를 만드는 방법
function printJS(){
    console.log('JavaScript');
}

let printHi = function(){
    console.log("Hi!");
};

const printHuiGwan = function(){
    console.log("HuiGwan!");
};

//값으로서 함수
const printJS = function(){
    console.log('JavaScript');
};
console.dir(printJS);

//객체 프로퍼티로서 함수
const myObject = {
    name : 'Huigwan',
    bornYear : 2022,
    sayHi : function(name){
        console.log(`Hi! ${name}`);
    }
};

//객체 배열 함수
const myArray = [
    'HuiGwan',
    2022,
    true,
    function(name){
        console.log(`Hi! ${name}`);
    },
];

function getPrintHi(){
    return function(){
        console.log('Hi!');
    };
}

getPrintHi();

//arguments
function printArgument(){
    for (const arg of arguments){
        console.log(arg);
    }
    console.log('------------------');
}

printArgument('Young', 'Mark', 'Koby');
printArgument('Captain');
printArgument('Suri', 'Jack', 'Joy', 'Noel');

//Rest Parameter
function printRank(first, second, ...others){
    //배열 관련 함수 사용 가능
    console.log(others.splice(0,2));
    console.log(arguments.splice(0,2));
    console.log('기말고사 등수');
    console.log(`우승: ${first}`);
    console.log(`준우승 ${second}`);
    for (const arg of others){
        console.log(`참가자: ${arg}`);
    }
}

printRank('Phill', 'Won', 'Emma', 'Min', 'Luke');

//Arrow Function
    // 함수 표현식
const getTwice = function(number){
    return number * 2;
}
    //함수 선언 방법
function getTwice(number){
    return number * 2;
}

    //Arrow Function 사용
const getTwice = (number) => {
    return number * 2;
}
    //Arrow Function가 return 문 한 줄로 이루어져 있을 경우
const getTwice = (number) => number * 2;
    //return 문 한 줄인데 반환 값이 객체일 경우
const getHuigwan = () => ({name: "Huigwan",});

//this
console.log(this);

const printThis = function(){
    console.log(this);
};

const myObj = {
    content: 'myObj',
    printThis: printThis,
};

const otherObj = {
    content : 'otherObj',
    printThis : printThis,
};

myObj.printThis();
otherObj.printThis();