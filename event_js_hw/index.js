const toDoList = document.querySelector('#to-do-list');
const items = toDoList.children;

function updateToDo(event){
    if(event.target.classList.contains('item')){
        event.target.classList.toggle('done');
    }
}
//for(let i = 0; i < items.length; i++){
//    items[i].addEventListener('click', updateToDo);
//}
// for(let i of items){
//     i.addEventListener('click', updateToDo);
// }
toDoList.addEventListener('click', updateToDo);