
const handleFormSubmit = (event) => {
    event.preventDefault();

    const inputTaskElement = document.getElementById("add-task-input");
    const newTaskElement = inputTaskElement.value;
    inputTaskElement.value = "";
    addTaskFunction(newTaskElement)

}

const populateDom = (taskListElement, newTaskElement) => {

    const existingTasks = Array.from(taskListElement.querySelectorAll('span'));
    const taskExists = existingTasks.some(task => task.textContent === newTaskElement);
    if (taskExists) {
        alert("Task already exists!");
        return;
    }

    const taskDiv = document.createElement("div");
    taskDiv.classList.add("task");
    const span = document.createElement('span');
    span.textContent = newTaskElement;
    taskDiv.appendChild(span);

    const editButton = document.createElement('button');
    editButton.textContent = 'edit';
    taskDiv.appendChild(editButton);

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'delete';
    taskDiv.appendChild(deleteButton);

    taskListElement.appendChild(taskDiv);

    editButton.addEventListener('click', () => {

        const otherTasks = existingTasks.filter(task => task !== span);

        const isNewContentDuplicate = otherTasks.some(task => task.textContent === span.textContent);
        if (isNewContentDuplicate) {
            alert("Task already exists!");
            return; F
        }

        span.contentEditable = !span.isContentEditable;
        span.focus();
    });

    deleteButton.addEventListener('click', () => {
        taskDiv.remove();
    });
}



