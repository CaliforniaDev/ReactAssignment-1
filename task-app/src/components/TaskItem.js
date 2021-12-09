import React from "react";
import styles from "./TaskItem.module.scss";
import TasksController from "./TaskController";

class TaskItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editing: false
        }
    }
    handleEditing = () => {
        this.setState({
            editing: true
        })
    }
    render() { 
        const { handleCompletedTask, deleteTask } = this.props;
        const { id, completed, title } = this.props.task;
        const completedStyle = {
            fontStyle: "italic",
            color: "#595959",
            opacity: 0.4,
            textDecoration: "line-through",
            transition: "0.5s",
        }

        let viewMode = {};
        let editMode = {};
        this.state.editing ? viewMode.display = "none" 
        : editMode.display="none"


        return (
            <li className={styles.item}>
                <div style={viewMode}>
                <input 
                  type="checkbox"
                  className={styles.checkbox}
                  checked={completed}
                  onChange={() => handleCompletedTask(id)}
                />
                <span style={completed ? completedStyle : null}>
                {title}
                </span>
                <TasksController editTask={this.handleEditing} deleteTask={() => deleteTask(id)}/>
                </div>
                <input type="text" style={editMode} className={styles.textInput} />
                
            </li>
        );
    }
}

export default TaskItem;