import Header from './components/Header'
import Tasks from './components/Tasks'
import { useState } from 'react'
import AddTask from './components/AddTask'

function App() {
  const [tasks, setTasks] = useState([
  {
    id: 1,
    text: "Give Benny some luvin'",
    day: '1/7/22',
    reminder: true
  },
  {
    id: 2,
    text: "Give Benny some head",
    day: '1/7/22',
    reminder: true
  },
  {
    id: 3,
    text: "Give Benny a good old fashioned ravaging",
    day: '1/7/22',
    reminder: true
  },
])

// Delete task
  const deleteTask = (id) => {
   setTasks(tasks.filter((task) => task.id !== id))
}

// toggle reminder
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder:
        !task.reminder } : task
      )
    )
  }

  return (
    <div className='container'>
      <Header />
      <AddTask />
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle=
      {toggleReminder} />
      : "you ain't got no tasks, lazy bitch"}
    </div>
  );
}


export default App;
