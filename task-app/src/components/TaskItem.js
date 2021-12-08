import React from "react";
import styles from "./TaskItem.module.scss";
import TasksController from "./TaskController";

const TaskItem = (props) => {
    const { task, handleCompletedTask, deleteTask } = props;
    const completedStyle = {
        fontStyle: "italic",
        color: "#595959",
        opacity: 0.4,
        textDecoration: "line-through",
        transition: "0.5s",
    }
    return (
        <li className={styles.item}>
            <input 
              type="checkbox"
              className={styles.checkbox}
              checked={task.completed}
              onChange={() => handleCompletedTask(task.id)}
            />
            <span style={task.completed ? completedStyle : null}>
            {task.title}
            </span>
            <TasksController deleteTask={() => deleteTask(task.id)}/>
            
        </li>
    )
}
export default TaskItem;