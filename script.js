const addButton = document.getElementById('add-button');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');
let tasks = [];

function saveData() {
	const targetString = JSON.stringify(tasks);
	localStorage.setItem('myTodoList', targetString);	
}

function displayTask(taskText) {
	const newTodo = document.createElement('li');
	const deleteButton = document.createElement('button');
	deleteButton.textContent = '削除';
	deleteButton.classList.add('deleteButton');
	deleteButton.addEventListener('click', () => {
		newTodo.remove();
		tasks = tasks.filter(t => t !== taskText);
		saveData();
	});
	newTodo.textContent = taskText;
	newTodo.appendChild(deleteButton);
	todoList.appendChild(newTodo);
}

addButton.addEventListener('click', () => {
	const taskText = todoInput.value.trim();
	if (taskText !== '') {
		tasks.push(taskText);
		saveData();
		displayTask(taskText);
		todoInput.value = '';
		todoInput.focus(); // 入力フィールドにフォーカスを戻す
	}
});

window.addEventListener('load', () => {
	const savedData = localStorage.getItem('myTodoList');
	if (savedData) {
		tasks = JSON.parse(savedData);
		tasks.forEach(taskText => {
			displayTask(taskText);
		});
	}
});
