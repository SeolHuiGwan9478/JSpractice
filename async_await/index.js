// fetch('https://jsonplaceholder.typicode.com/users')
// .then((response) => response.text())
// .then((reuslt) => { console.log(result); });

//위의 코드를 async, await을 사용하여 나타낸 경우
async function fetchAndPrint(){
    console.log(2);
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    console.log(7);
    const result = await response.text();
    console.log(result);
}

console.log(1);
fetchAndPrint();
console.log(3);
console.log(4);
console.log(5);
console.log(6);

async function fetchAndPrint(){
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const result = await response.text();
        console.log(result);
    } catch(error){
        console.log(error);
    } finally{
        console.log('exit');
    }
}

fetchAndPrint();

//async Promise 객체1
async function fetchAndPrint(){
    return 3;
}

fetchAndPrint();

//async Promise 객체2
async function fetchAndPrint(){
    return fetch('htpps://jsonplaceholder.typicode.com/users')
            .then((response) => response.text());
}

fetchAndPrint();

//async 안의 async
const applyPrivacyRule = async function(users){
    const resultWithRuleApplied = users.map((user) => {
        const keys = Object.keys(user);
        const userWithoutPrivateInfo = {};
        keys.forEach((key) => {
            if(key !== 'address' && key != 'phone'){
                userWithoutPrivateInfo[key] = user[key];
            }
        });
        return userWithoutPrivateInfo;
    });
    const p = new Promise((resolve, reject) => {
        setTimeout(() => { resolve(resultWithRuleApplied); }, 2000);
    });
    return p;
};

async function getUsers(){
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const result = await response.text();
        const users = JSON.parse(result);
        const resultWithPrivacyRuleApplied = await applyPrivacyRule(users);
        return resultWithPrivacyRuleApplied;
    } catch(error){
        console.log(error);
    } finally {
        console.log('exit');
    }
}