// Select elements
const taskInput = document.getElementById('new-task');
const addTaskBtn = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');

// Load tasks from localStorage on page load
document.addEventListener('DOMContentLoaded', loadTasks);

// Add task event listener
addTaskBtn.addEventListener('click', addTask);

// Function to add a new task
function addTask() {
  const taskText = taskInput.value.trim();

  if (taskText === '') {
    alert('Please enter a task!');
    return;
  }

  // Create list item
  const li = document.createElement('li');
  li.textContent = taskText;

  // Add delete button
  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';
  li.appendChild(deleteBtn);

  // Append the list item to the task list
  taskList.appendChild(li);

  // Save to localStorage
  saveTask(taskText);

  // Clear the input
  taskInput.value = '';

  // Delete task event listener
  deleteBtn.addEventListener('click', () => {
    li.remove();
    removeTask(taskText);
  });

  // Mark as completed
  li.addEventListener('click', () => {
    li.classList.toggle('completed');
  });
}

// Function to load tasks from localStorage
function loadTasks() {
  const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  tasks.forEach((task) => {
    const li = document.createElement('li');
    li.textContent = task;

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    li.appendChild(deleteBtn);

    taskList.appendChild(li);

    deleteBtn.addEventListener('click', () => {
      li.remove();
      removeTask(task);
    });

    li.addEventListener('click', () => {
      li.classList.toggle('completed');
    });
  });
}

// Function to save task to localStorage
function saveTask(task) {
  const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  tasks.push(task);
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Function to remove task from localStorage
function removeTask(taskToRemove) {
  let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  tasks = tasks.filter((task) => task !== taskToRemove);
  localStorage.setItem('tasks', JSON.stringify(tasks));
}
