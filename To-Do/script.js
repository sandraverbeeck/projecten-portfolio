const input = document.getElementById('inputveldje');
const addButton = document.getElementById('toevoegen');
const todoList = document.getElementById('todo-lijst');
addButton.addEventListener('click', () => {
  const li = document.createElement('li');
  li.textContent = input.value;

  todoList.appendChild(li);
  input.value = '';
}); 