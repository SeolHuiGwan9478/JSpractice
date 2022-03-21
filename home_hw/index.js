// showTitle 함수를 완성해 주세요.
function showTitle(e) {
	// 여기에 코드를 작성해 주세요.
    console.log(e.target);
}

// removeTitle 함수를 완성해 주세요.
//function removeTitle(e) {
	// 여기에 코드를 작성해 주세요.

//}
const map = document.querySelector(".map");
// '대상'과 '타입'을 수정해 주세요.
map.addEventListener("mouseover", showTitle);
//대상.addEventListener('타입', removeTitle);