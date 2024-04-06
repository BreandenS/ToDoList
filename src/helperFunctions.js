
const handleFormSubmit = (event) => {
    event.preventDefault();

    const inputTaskElement = document.getElementById("add-task-input");
    const newTaskElement = inputTaskElement.value;
    inputTaskElement.value = "";
    addTaskFunction(newTaskElement)

}


const populateDom =(taskListElement, newTaskElement)=>{


    taskListElement.innerHTML +=
        `<div>
               <span>${newTaskElement}</span>
               <button class="edit-button">edit</button>
               <button class="delete-button">delete</button>
         </div>`;

}