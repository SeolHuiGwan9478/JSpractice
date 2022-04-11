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
        return users[0];
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

//Promise Chaining이 필요한 경우
console.log('Start!');

fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.text())
    .then((result) => {
        const users = JSON.parse(result);
        const { id } = users[0];
        fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
            .then((response) => response.text())
            .then((posts) => {
                console.log(posts);
            });
    });

console.log('End!');

console.log('Start!');

fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.text())
    .then((result) => {
        const users = JSON.parse(result);
        const { id } = users[0];
        return fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
    })
    .then((response) => response.text())
    .then((posts) => {
        console.log(posts);
    });

console.log('End!');

//Promise rejected 되었을 때
fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.text(), (error) => { console.log(error); })
    .then((result) => { console.log(result); });

//catch 메소드
fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.text())
    .catch((error) => { console.log(error); }) //.then(undefined, (error) => {console.log(error)})
    .then((result) => { console.log(result); });

//finally 메소드
//fulfilled일 경우
fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.text())
    .then((result) => { console.log(result); })
    .catch((error) => { console.log(error); }) //.then(undefined, (error) => {console.log(error)})
    .finally(() => { console.log('exit'); });

//rejected일 경우
fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.text())
    .then((result) => { console.log(result); })
    .catch((error) => { 
        console.log(error);
        throw new Error('from catch method'); 
    }) //.then(undefined, (error) => {console.log(error)})
    .finally(() => { console.log('exit'); });