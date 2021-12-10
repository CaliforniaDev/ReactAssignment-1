import TaskItem from './TaskItem';



const Overview = (props) => {
    const { tasks, handleCompletedTask, deleteTask, setUpdate } = props;
    return (
        <div>
            <ul>
                {tasks.map(task => (
                    <TaskItem 
                      key={task.id} 
                      task={task}
                      handleCompletedTask={handleCompletedTask}
                      deleteTask={deleteTask} 
                      setUpdate={setUpdate}
                    />
                ))}
            </ul>
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