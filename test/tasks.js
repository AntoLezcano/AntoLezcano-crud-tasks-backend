import {deleteTask, updateTask} from '../../service'

export const renderTask = (tasks)=> {
    
    const $conteinerTask = document.createElement("div")
    $conteinerTask.classList.add("task-conteiner")

    const $taskTitle = document.createElement("p")
    const $descriptionTask = document.createElement("p")
    const $taskisComplete = document.createElement("input")
    const $taskDelete = document.createElement("button")
    const $taskUpdate = document.createElement("button")

    //titulo
    $taskTitle.classList.add("task-title")
    $taskTitle.textContent = tasks.title;

    if (tasks.isComplete) {
        $taskisComplete.style.textDecoration = "line-through"
    }
 
    $conteinerTask.appendChild($descriptionTask)
    
    $taskisComplete.type = "checkbox"
    $taskisComplete.checked = tasks.isCompletes

    $taskisComplete.addEventListener("change", (e)=> {
        tasks.isComplete = event.target.checked;
        $taskTitle.style.textDecoration = tasks.isComplete ? "line-through" : "none";
        $descriptionTask.style.textDecoration = tasks.isComplete
        ? "line-through" : "none";

        updateTask(tasks.id, {
            title : tasks.title,
            description : tasks.description,
            isComplete : tasks.isComplete
        })

        $conteinerTask.appendChild($taskisComplete)

        $taskDelete.textContent = "Eliminar"

        $taskDelete.addEventListener("click", async () => {
           await deleteTask(tasks.id)
           $conteinerTask.remove()
        })

        $conteinerTask.appendChild($taskDelete)

        return $conteinerTask
    });
}