const todolist = document.querySelector('#to-do-list');
function addNewTodo(text){
    const list = document.createElement('li');

    list.textContent = text;
    todolist.append(list);
}

addNewTodo("자바스크립트 공부하기");
addNewTodo("한국외대 컴퓨터공학과");
addNewTodo("201901881 설희관");