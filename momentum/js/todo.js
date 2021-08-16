const todoForm = document.getElementById("todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.getElementById("todo-list");

const TODO_KEY = "todos";

let todos = [];


function savedTodos(){
    localStorage.setItem(TODO_KEY, JSON.stringify(todos));
}

function deleteTodo(event){
    const li = event.target.parentElement;
    li.remove();
    todos = todos.filter((todo) => todo.id !== parseInt(li.id));
    savedTodos();
}

function paintToDo(newTodo){
    const li = document.createElement("li");
    li.id = newTodo.id; 
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteTodo)
    li.appendChild(span);
    li.appendChild(button)
    todoList.appendChild(li);
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = todoInput.value;
    todoInput.value="";
    const newTodoObj = {
        text:newTodo,
        id: Date.now(),
    };
    todos.push(newTodoObj);
    paintToDo(newTodoObj);
    savedTodos();
}

todoForm.addEventListener("submit", handleToDoSubmit);

const savedtodos = localStorage.getItem(TODO_KEY);

if (savedtodos !== null){
    const parsedTodos = JSON.parse(savedtodos)
    todos = parsedTodos;
    parsedTodos.forEach(paintToDo);
}