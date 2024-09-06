document.getElementById('addTaskBtn').addEventListener('click', function() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
        addTask(taskText);
        taskInput.value = ''; // Clear the input field after adding the task
    }
});

function addTask(taskText) {
    const taskList = document.getElementById('taskList');

    const listItem = document.createElement('li');
    const span = document.createElement('span');
    span.textContent = taskText;

    listItem.appendChild(span);
    taskList.appendChild(listItem);

    // Add click event to remove the task when clicked
    listItem.addEventListener('click', function() {
        taskList.removeChild(listItem);
    });
}
