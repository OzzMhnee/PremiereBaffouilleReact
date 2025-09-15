import { useState } from "react";
import '../style/TodoList.scss';

const ToDoList = ({ tasks }) => {
    // créé la liste de tâches initiale à partir des props
    const [taskList, setTaskList] = useState(tasks);
    
    // fonction pour basculer l'état d'une tâche
    const toggleTaskCompletion = (taskId) => {
        setTaskList(taskList.map(task => 
            task.id === taskId ? { ...task, done: !task.done } : task
            // ... : opérateur de décomposition pour copier les autres propriétés de la tâche
        ));
    };

    // liste des tâches avec gestion du clic
    return (
        <ul>
            {taskList.map(task => (
                <li className="tasks" key={task.id} onClick={() => toggleTaskCompletion(task.id)} style={{ textDecoration: task.done ? 'line-through' : 'none', cursor: 'pointer' }}>
                    {task.name}
                </li>
            ))}
        </ul>
    );
};

export default ToDoList;