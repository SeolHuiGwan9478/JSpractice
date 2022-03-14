// 이벤트 위임 (Event Delegation)
const list = document.querySelector('#list');

// for(let item of list.children){
//     item.addEventListener('click', function(e){
//         e.target.classList.toggle('done');
//     });
// }
list.addEventListener('click', function(e){
    e.target.classList.toggle('done');
});

const li = document.createElement('li');
li.classList.add('item');
li.textContent = '일기 쓰기';
list.append(li);