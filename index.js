const formElement = document.getElementById("add-task-form");
const taskListElement = document.getElementById("task-list");

function createTaskItemElement(taskListElement, newTask ,taskId){

const taskItemElement = document.createElement("div");
taskItemElement.classList.add("task-item");

taskItemElement.innerHTML =
    `
        <input type="checkbox" name="" id="${taskId}">
        <label for="${taskId}">${newTask}</label>
        <button class="edit">edit</button>
        <button class="delete">x</button>
    `
taskListElement.appendChild(taskItemElement);


}

createTaskItemElement(taskListElement , "gym" ," taskId1");
createTaskItemElement(taskListElement , "gym2" ," taskId2");
createTaskItemElement(taskListElement , "gym3" ," taskId3");