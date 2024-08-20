import {deleteTask, updateTask} from './service'

export const renderTask = (tasks)=> {

const $taskConteiner = document.createElement("div")
$taskConteiner.classList.add("task-conteiner")
}

    const $taskTitle = document.createElement("p")
    const $descriptionTask = document.createElement("p")
    const $taskisComplete = document.createElement("input")

    //titulo
    $taskTitle.classList.add("task-title")
    $taskTitle.textContent = task.title;

    if (task.isComplete) {
        $taskisComplete.style.textDecoration = "line-through"
    }

    

