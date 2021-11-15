const TasksList = (props) => {
    const tasks = props.tasks;
    const listTasks = tasks.map((taskItem, index) =>
        <li key={index}>{taskItem.text}</li>
    );
    return (
        <div>
            <h1>List of Tasks</h1>
            <ul>{listTasks}</ul>
        </div>
    );
}

export default TasksList;