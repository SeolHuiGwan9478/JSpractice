//비동기 실행 함수 fetch
console.log('Start!');

fetch("https://jsonplaceholder.typicode.com/users")
.then((response) => response.text())
.then((result) => { console.log(result); });

console.log('End!');

//setTimeout 함수 : 비동기 실행 함수1
console.log('a');
setTimeout(() => { console.log('b'); }, 2000);
console.log('c');

//setInterval 함수 : 비동기 실행 함수2
console.log('a');
setInterval(() => { console.log('b'); }, 2000);
console.log('c');

//Promise Chaining 코드
console.log('Start!');

fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.text())
    .then((result) => {
        const users = JSON.parse(result);
    })
    .then((user) => {
        console.log(user);
        const { address } = user; //객체 언패킹
        return address;
    })
    .then((address) => {
        console.log(address);
        const { geo } = address;
        return geo;
    })

console.log('End!');