/*
const myTags = document.getElementsByClassName('codeit');
console.log(myTags);
console.log(myTags[0]);
console.log(myTags.length);

for (let tag of myTags){
    console.log(tag);
}
*/

// css 선택자로 태그 선택하기
//document.querySelector("#myNumber");
//document.querySelectorAll(".color-btn");
//document.querySelector(".color-btn");

//이벤트(Event)와 버튼 클릭
// const btn = document.querySelector('#myBtn');

// //이벤트 핸들링(Event Handling)
// btn.onclick = function(){
//     console.log('Hello Codeit!');
// }

const btn2 = document.querySelector("#check");
console.log(btn2);
btn2.onclick = function(){
    alert("정답입니다!");
};