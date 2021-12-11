import React from "react";
import styles from "./TaskItem.module.scss";
import TasksController from "./TaskController";

class TaskItem extends React.Component {

    componentDidUpdate() {
        this.textInput.focus();
    }
    render() { 

        const { handleCompletedTask, deleteTask, 
                controlledInput, handleEditingProp,
                setEditingTask } = this.props;

        const { id, completed, title, editing} = this.props.task;
        const completedStyle = {
            fontStyle: "italic",
            color: "#595959",
            opacity: 0.4,
            textDecoration: "line-through",
            transition: "0.5s",
        }
        let viewMode = {};
        let editMode = {};
        editing ? viewMode.display = "none"
        : editMode.display="none"


        return (
            <li className={styles.item}>
                <div onDoubleClick={this.handleEditing} style={viewMode}>
                <input 
                  type="checkbox"
                  className={styles.checkbox}
                  checked={completed}
                  onChange={() => handleCompletedTask(id)}
                />
                <span style={completed ? completedStyle : null}>
                {title}
                </span>
                <TasksController 
                  editTask={() => handleEditingProp(id)} 
                  deleteTask={() => deleteTask(id)}
                  />
                </div>
                <input 
                  type="text" 
                  style={editMode} 
                  className={styles.textInput} 
                  value={title}
                  onFocus={e => e.target.select()}
                  onChange={e => { controlledInput(e.target.value, id)}} 
                  onKeyDown={e => { setEditingTask(e, id)}}
                  ref={el => {this.textInput = el}}
                />
                
            </li>
        );
    }
}

export default TaskItem;