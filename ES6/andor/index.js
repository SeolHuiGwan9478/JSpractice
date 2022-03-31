//AND 와 OR의 연산 방식
function print(value){
    const message = value || 'HuiGwan';
    
    console.log(message);
}

print();
print('JavaScript');

//변수와 스코프
console.log(title); //undefined
var title = "codeit";
console.log(title); //codeit

var x = 3;
function myFunc(){
    var y = 4;
    console.log(`x in myFunc: ${x}`);
    console.log(`y in myFunc: ${y}`);
}

myFunc();
console.log(x);
console.log(y);

//변수와 스코프2
var x = 3;

if(x < 4){
    var y = 3;
}

for(var i = 0; i < 5; i++){
    console.log(i);
}
console.log('x: ', x);
console.log('y: ', y);
console.log('z: ', z);

//함수를 만드는 방법
function printJS(){
    console.log('JavaScript');
}

let printHi = function(){
    console.log("Hi!");
};

const printCodeit = function(){
    console.log("HuiGwan!");
};
