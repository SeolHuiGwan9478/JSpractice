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