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