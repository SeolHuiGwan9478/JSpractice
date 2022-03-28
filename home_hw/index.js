// showTitle 함수를 완성해 주세요.
function showTitle(e) {
	// 여기에 코드를 작성해 주세요.
    if(e.target.getAttribute('data-title')){
		const spanTag = document.createElement('span');
		const content = e.target.dataset.title;
		spanTag.classList.add('title');
		spanTag.textContent = content;
		e.target.append(spanTag);
	}
}

// removeTitle 함수를 완성해 주세요.
function removeTitle(e) {
	// 여기에 코드를 작성해 주세요.
	if(e.target.getAttribute('data-title')){
		e.target.lastElementChild.remove();
	}
}
const map = document.querySelector(".map");
// '대상'과 '타입'을 수정해 주세요.
map.addEventListener("mouseover", showTitle);
map.addEventListener('mouseout', removeTitle);