
let taskListArray = [];
const taskFormElement = document.getElementById("add-task-form");
const taskListElement = document.getElementById("task-list");




const addTaskFunction = (newTaskElement) => {



    if (newTaskElement) {
        
        taskListArray.push(newTaskElement);
        console.log(newTaskElement);

        populateDom(taskListElement, newTaskElement);
    }

}
populateDom("task-list","Dom");

taskFormElement.addEventListener("submit", handleFormSubmit);