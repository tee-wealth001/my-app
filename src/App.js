// function based
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from "./components/Header";
import Footer from './components/Footer'
import About from './components/About'
import Tasks from "./components/Tasks";
import AddTask from './components/AddTask';
import { fetchTasks, deleteServerTask, addTaskToServer, fetchSingleTask, updateTaskToServer } from "./service/TaskService";

function App() {

  // useState returns a stateful value and a function to update it
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([])

  //useEffect
  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks()
      console.log(tasksFromServer)
      setTasks(tasksFromServer)
    }

    getTasks()
  }, [])


  // Add task
  const addTask = async (task) => {
    const data = await addTaskToServer(task)
    setTasks([...tasks, data])
  }

  //Delete task
  const deleteTask = async (id) => {

    await deleteServerTask(id)
    setTasks(tasks.filter((task) => task.id != id));
  }

  //set reminder
  const toggleReminder = async (id) => {

    const taskToToggle = await fetchSingleTask(id)
    const updateTask = { ...taskToToggle, reminder: !taskToToggle.reminder }
    const data = await updateTaskToServer(id, updateTask)
    setTasks(tasks.map((task) => task.id == id ? { ...task, reminder: data.reminder } : task))
  }

  const emptyRecordMessage = 'No Record Found'
  return (
    <Router>

      <div className="container">

        <Header title='Task Tracker'
          onAdd={() => setShowAddTask(!showAddTask)}
          showAdd={showAddTask} />

        <Routes>
          <Route
            path='/'
            element={
              <>
                {/* //short way to show ternary operator with no else  */}
                {showAddTask && <AddTask onAdd={addTask} />}
                {tasks.length > 0 ?
                  (<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />) : (emptyRecordMessage)}
              </>
            }

          />
          <Route path='/about' element={<About />} />
        </Routes>
        <Footer />
      </div>

    </Router>

  );
}

export default App;


// // class based

// import React from "react";

// class App extends React.Component{
//   render(){

//     return <h1>hello</h1>

//   }
// }

// export default App;
