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

// const today = document.querySelector('#today');
// today.innerHTML = '<li>처음</li>' + today.innerHTML;
// today.innerHTML = today.innerHTML + '<li>마지막</li>';

// today.outerHTML = '<p>이전</p>' + today.outerHTML;
// console.log(today.outerHTML);

// const newToday = document.querySelector('#today');
// newToday.outerHTML = newToday.outerHTML + '<p>다음</p>';

// //요소 노드 추가하기
// const tomorrow = document.querySelector('#tomorrow');

// //1. 요소 노드 만들기: document.createElement('태그이름');
// const first = document.createElement('li');

// //2. 요소 노드 꾸미기: textContent, innerHTML, ...을 통해서
// first.textContent = '처음';

// //3. 요소 노드 추가하기 : NODE.prepend, append, after, before
// tomorrow.prepend(first);

// const last = document.createElement('li');
// last.textContent = '마지막';
// tomorrow.append(last);

// const prev = document.createElement('p');
// prev.textContent = '이전';
// tomorrow.before(prev);

// const next = document.createElement('p');
// next.textContent = '다음';
// tomorrow.after(next);

//노드 삭제하기 : Node.remove()
//const today = document.querySelector('#today');
//const tomorrow = document.querySelector('#tomorrow');

//tomorrow.remove();

//노드 이동하기 : prepend, append, before, after
//tomorrow.children[1].after(today.children[1]);
//tomorrow.children[2].before(today.children[1]);

//HTML 속성 (HTML attribute)
// const tomorrow = document.querySelector('#tomorrow');
// const item = tomorrow.firstElementChild;
// const link = item.firstElementChild;

// //id 속성
// console.log(tomorrow);
// console.log(tomorrow.id);

// //class 속성 주의!!
// console.log(item);
// console.log(item.className);

// //href 속성
// console.log(link);
// console.log(link.href);
// console.log(tomorrow.href);

// // elem.getAttribute('속성'): 속성에 접근하기
// console.log(tomorrow.getAttribute('href'));
// console.log(item.getAttribute('class'));

// // elem.setAttribute('속성', '값'): 속성 추가(수정)하기
// tomorrow.setAttribute('class', 'list'); // 추가
// link.setAttribute('href', 'https://www.naver.com'); // 수정하기

// // elem.removeAttribute('속성'): 속성 제거하기
// tomorrow.removeAttribute('HRef');
// tomorrow.removeAttribute('CLass');

//스타일 다루기
const today = document.querySelector('#today');
const tomorrow = document.querySelector('#tomorrow');

// elem.classList: add, remove, toggle
const item = tomorrow.children[1];
// elem.classList: add, remove, toggle
item.classList.add('done');
item.classlist.remove('done');
item.classList.toggle('done', true);
item.classList.toggle('done', false);

// elem.className
today.children[1].className = 'done';

//style 프로퍼티
//today.children[0].style.text-decoration = 'line-through';
today.children[0].style.textDecoration = 'line-through'
today.children[0].style.backgroundColor = '#DDDDDD';
today.children[2].style.textDecoration = 'line-through'
today.children[2].style.backgroundColor = '#DDDDDD';
