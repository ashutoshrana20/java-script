

function addTask(){
    const newTask = document.createElement("li")
    const taskList = document.createElement("taskList")
    taskList.appendChild(newTask)
    newTask.textContent = document.getElementById('inputTask').value

    
}