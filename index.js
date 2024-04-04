
const taskListArray = [];
const taskFormElement = document.getElementById("add-task-form");
const taskListElement = document.getElementById("task-list");

const addTaskFunction = (event) => {
    event.preventDefault();


    const inputTaskElement = document.getElementById("add-task-input");
    const newTaskElement = inputTaskElement.value;
    taskListElement.innerHTML += `<li>${newTaskElement}</li>`;


    taskListArray.push(newTaskElement);
    console.log(newTaskElement);

    inputTaskElement.value = "";

}

taskFormElement.addEventListener("submit", addTaskFunction);