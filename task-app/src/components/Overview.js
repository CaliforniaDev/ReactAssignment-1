import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';



const Overview = (props) => {
    const { tasks, removeTask } = props;
    const listTasks = tasks.map((taskItem) =>
        <li key={taskItem.id}>
            {taskItem.text} 
            <DeleteButton onClick={removeTask} />
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
    const trashIcon = <FontAwesomeIcon icon={faTrashAlt} />;

    return (
        <button onClick={props.onClick}>{trashIcon}</button>
    );
}

export default Overview;