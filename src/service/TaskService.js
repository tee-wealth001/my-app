const serverUrl = 'http://localhost:3001'

//fetch Tasks
export const fetchTasks = async () => {
    const res = await fetch(serverUrl + '/tasks')
    const data = await res.json();
    return data
}

//fetch single Tasks
export const fetchSingleTask = async (id) => {
    const res = await fetch(serverUrl + `/tasks/${id}`)
    const data = await res.json();

    console.log(data)
    return data
}

// delete tasks
export const deleteServerTask = async (id) => {
    const res = await fetch(serverUrl + `/tasks/${id}`, {
        method: 'DELETE'
    })
    console.log(res)
}

// add task
export const addTaskToServer = async (task) => {
    const res = await fetch(serverUrl + `/tasks`, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(task)
    })

    const data = await res.json();
    return data
}

// add task
export const updateTaskToServer = async (id,newTask) => {
    console.log(newTask)
    const res = await fetch(serverUrl + `/tasks/${id}`, {
        method: 'PUT',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(newTask)
    })

    const data = await res.json();
    return data
}
