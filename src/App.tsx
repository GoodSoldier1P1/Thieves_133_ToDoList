import { ChangeEvent, useState } from 'react'
import './App.css'
import ToDoList from './ToDoList/ToDoList'
export interface Task {
  taskName: string
  taskTime: number
}

const App: React.FC = () => {

  const [task, setTask] = useState<string>('')
  const [time, setTime] = useState<number>(0)
  const [todo, setTodo] = useState<Task[]>([])

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
      if (event.target.name === 'task'){
          setTask(event.target.value)
      } else{
          setTime(Number(event.target.value))
      }
  }

  const addTask = () => {
      const newTask = {
          taskName: task,
          taskTime: time
      }
      setTodo([... todo, newTask])
      setTask("")
      setTime(0)
  }

  const completeTask = (taskToDelete: string) => {
    setTodo((prevTodo) => 
    prevTodo.filter((task) => 
    task.taskName !== taskToDelete
    ));
  };

  return (
    <div className='App'>
      <div className='header'>
        <div className='inputs'>
          <input className='taskInput' type="text" name='task' placeholder='What task do you still need to do?' value={task} onChange={handleChange} />
          <input className='timeInput' type="number" name='time' placeholder='How long do you have to complete this? (in days)' value={time} onChange={handleChange} />
        </div>
        <button onClick={addTask} className='addBtn'>Add</button>
      </div>
      <div className='ToDoList'>
        {todo.map((task:Task, key:number) => (
          <ToDoList key={key} task={task} completeTask={completeTask} />
        ))}
      </div>
    </div>
  )
}

export default App
