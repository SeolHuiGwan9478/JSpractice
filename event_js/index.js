// 이벤트 핸들러 등록하기
let btn = document.querySelector('#myBtn');

//btn.onclick = fucntion() {
//    console.log('Hi HuiGwan!');
//};
// 또는 <button> 태그의 속성 onclick을 통해 ..

function event1(){
    console.log('Hi HuiGwan!');
}

function event2(){
   console.log('Hi again!');
}

// btn.onclick = function(){
//     event1();
//     event2();
// };

// elem.addEventListener(event, handler)
btn.addEventListener('click', event1);
btn.addEventListener('click', event2);

// elem.removeEventListener(event, handler)
btn.removeEventListener('click', event2);

// 잘못된 방법
btn.addEventListener('click', function(){
    console.log('event3!');
});

btn.removeEventListener('click', function(){
    console.log('event3!');
});
