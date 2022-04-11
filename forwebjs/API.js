fetch("https://www.google.com")
.then((response) => response.text())
.then((result) => { console.log(result); });

//json 파일 불러오기
fetch("Access-Control-Allow-Origin:https://jsonplaceholder.typicode.com/users").then((response)=>response.text()).then((result)=>{console.log(result);});

//json 데이터를 객체로 변환하기
fetch("https://jsonplaceholder.typicode.com/users")
.then((response)=>response.text())
.then((result)=>{
    const users = JSON.parse(result);
    users.forEach((user)=>{
        console.log(user.name)
    })
});

//POST request 보내기
const newMember = {
    name:"HuiGwan",
    email:"shg0102kr@hufs.ac.kr",
    department:"CES",
};

fetch("https://learn.codeit.kr/api/memebers", {
    method : "POST",
    body : JSON.stringify(newMember),
}).then((response)=>response.text()).then((result)=>{
    console.log(result);
})

//PUT request 보내기
const member = {
    name:"HuiGwan",
    email:"shg0102kr@hufs.ac.kr",
    department:"AI & Language",
};

fetch("https://learn.codeit.kr/api/memebers/6", {
    method : "PUT",
    body : JSON.stringify(member),
}).then((response)=>response.text()).then((result)=>{
    console.log(result);
})

//DELETE request 보내기
fetch("https://learn.codeit.kr/api/memebers/6", {
    method : "DELETE",
})
.then((response)=>response.text())
.then((result)=>{ console.log(result);});