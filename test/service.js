import {API_URL} from './const'

//mostrar tarea
export const getTask = async () => {
    
    let response = await fetch(API_URL, {
        method : 'GET',
    })
    
    let tasks = await response.json()   
}

//crear tarea
export const createTask = async ({title, description, isComplete}) =>{
    try {
            await fetch(API_URL, {
                method: 'POST',
                body: JSON.stringify(
                    title, description, isComplete
                ),
                headers: {
                    "Content-Type": "application/json",
                }
            })
            console.log("Tarea creada exitosamente")
    } catch (err) {
         console.log("Se produjo un error al crear la Tarea", err)
    }
}

//Editar tarea
export const updateTask = async (id, {title, description, isComplete}) => {
try {
    await fetch(API_URL + `${id}`, {
        method: "PUT",
        body: JSON.stringify(
            title, description, isComplete
        ),
        headers: {
            "Content-Type": "application/json"
        }
    })
    console.log("Tarea editada exitosamente")
} catch (err) {
    console.log("Se produjo un error al editar la tarea", err)
}
}

//eliminar tarea 
export const deleteTask = async (id) => {
    try {
        await fetch(API_URL+id, {
            method: 'DELETE',
        })
        console.log("Tarea eliminada exitosamente")
    } catch (err) {
        console.log("Se produjo un error al eliminar la tarea", err)
    }
} 