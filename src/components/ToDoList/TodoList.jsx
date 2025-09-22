import '../style/TodoList.scss';

const ToDoList = ({ tasks, setTasks }) => {
    
    // fonction pour basculer l'état d'une tâche
    const toggleTaskCompletion = (taskId) => {
        setTasks(tasks.map(task => 
            task.id === taskId ? { ...task, done: !task.done } : task
            // ... : spread opérateur de décomposition pour copier les autres propriétés de la tâche
        ));
    };

    // liste des tâches avec gestion du clic
    return (
        <ul>
            {tasks.map(task => (
                <li className="tasks" key={task.id} onClick={() => toggleTaskCompletion(task.id)} style={{ textDecoration: task.done ? 'line-through' : 'none', cursor: 'pointer' }}>
                    {task.name}
                </li>
            ))}
        </ul>
    );
};

export default ToDoList;