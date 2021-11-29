import TaskItem from './TaskItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTimesCircle } from '@fortawesome/free-solid-svg-icons';



const Overview = (props) => {
    const { tasks } = props;
    return (
        <div>
            <ul>
                {tasks.map(task => (
                    <TaskItem key={task.id} task={task} />
                ))}
            </ul>
        </div>
    );
}



const TasksController = (props) => {
    const { removeTask, editTask } = props;
    const deleteIcon = <FontAwesomeIcon className="task-icon" size="lg" icon={faTimesCircle} />;
    const editIcon = <FontAwesomeIcon className="task-icon" size="lg" icon={faEdit} />

    return (
        <div id="task-icon-container">
            <span onClick={removeTask}>{deleteIcon}</span>
            <span onClick={editTask}>{editIcon}</span>
        </div>
    );
}

export default Overview;



{/*   const listTasks = tasks.map((taskItem) =>
        //state.editing === true ? console.log(state) : 
        <li className="styles.item" key={taskItem.id}>
            <div style={viewmode}>
                {taskItem.text}
                <TasksController
                    editTask={editTask}
                    removeTask={() => removeTask(taskItem.id)}
                />
            </div>
            <input
                value={taskItem.text}
                type="text"
                className="style.textInput"
                onChange={e => updateTask(e.target.value, taskItem.id)}
            />
            
            <button >Update Task</button>
        </li>
    ); */}