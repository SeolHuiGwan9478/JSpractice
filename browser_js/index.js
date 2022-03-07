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
const myTag = document.querySelector("#list-1");

//innerHTML
// console.log(myTag.innerHTML);
// myTag.innerHTML += '<li>Exotic</li>';
// myTag.innerHTML = '<li>Exotic</li>';

//outerHTML
console.log(myTag.outerHTML);

//textContent
console.log(myTag.textContent);
myTag.textContent = '<li>test</li>';