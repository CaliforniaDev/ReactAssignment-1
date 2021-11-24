import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTimesCircle } from '@fortawesome/free-solid-svg-icons';



const Overview = (props) => {
    const { tasks, removeTask } = props;
    const listTasks = tasks.map((taskItem) =>
        <li key={taskItem.id}>
            {taskItem.text} 
            <DeleteButton onClick={() => removeTask(taskItem.id)} />
        </li>
    );
    return (
        <div>
            <h1>List of Tasks</h1>
            <ul>{listTasks}</ul>
        </div>
    );
}

const DeleteButton = (props) => {
    const deleteIcon = <FontAwesomeIcon size="lg" icon={faTimesCircle} />;
    const editIcon = <FontAwesomeIcon size="lg" icon={faEdit} />
  
    return (
        <div onClick={props.onClick} id="deleteIconContainer">
            <span>{deleteIcon}</span> <span>{editIcon}</span>
        </div>
    );
}

export default Overview;