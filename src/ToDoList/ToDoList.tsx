import React from "react"
import { Task } from "../App"
import { VscCircleSlash } from "react-icons/vsc";
import './ToDoList.css'


interface Props {
    task: Task
    completeTask(taskToDelete: string): void
}

const ToDoList = ({task, completeTask}: Props) => {
  return (
    <div className="Task">
        <div className="content">
            <span className="addedTask">{task.taskName} - </span>
            <span className="addedTime">{task.taskTime} days left</span>
        <button className="removeBtn" onClick={() => {
            completeTask(task.taskName)
        }}><VscCircleSlash /></button>
        </div>
    </div>
  )
}
export default ToDoList