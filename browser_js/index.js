//DOM(Document object model)
//console.log(document);
//console.log(typeof document);
//console.dir(document);
//
//const title = document.querySelector('#title');
//title.style.color = 'red';

//DOM 트리 여행하기
//const myTag = document.querySelector()

//부모 요소 노드
//console.log(myTag.parentElement);

//자식 요소 노드
// console.log(myTag.children[1]);
// console.log(myTag.firstElementChild);
// console.log(myTag.lastElementChild);

//형제 요소 노드
// console.log(myTag.previousElementSibling);
// console.log(myTag.nextElementSibling);

//요소 노드 주요 프로퍼티
// const myTag = document.querySelector("#list-1");

// //innerHTML
// // console.log(myTag.innerHTML);
// // myTag.innerHTML += '<li>Exotic</li>';
// // myTag.innerHTML = '<li>Exotic</li>';

// //outerHTML
// console.log(myTag.outerHTML);

// //textContent
// console.log(myTag.textContent);
// myTag.textContent = '<li>test</li>';

const today = document.querySelector('#today');
today.innerHTML = '<li>처음</li>' + today.innerHTML;
today.innerHTML = today.innerHTML + '<li>마지막</li>';

today.outerHTML = '<p>이전</p>' + today.outerHTML;
console.log(today.outerHTML);

const newToday = document.querySelector('#today');
newToday.outerHTML = newToday.outerHTML + '<p>다음</p>';

//요소 노드 추가하기
const tomorrow = document.querySelector('#tomorrow');

//1. 요소 노드 만들기: document.createElement('태그이름');
const first = document.createElement('li');

//2. 요소 노드 꾸미기: textContent, innerHTML, ...을 통해서
first.textContent = '처음';

//3. 요소 노드 추가하기 : NODE.prepend, append, after, before
tomorrow.prepend(first);

const last = document.createElement('li');
last.textContent = '마지막';
tomorrow.append(last);

const prev = document.createElement('p');
prev.textContent = '이전';
tomorrow.before(prev);

const next = document.createElement('p');
next.textContent = '다음';
tomorrow.after(next);