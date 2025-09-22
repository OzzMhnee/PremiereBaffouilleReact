import ToDoList from '../components/ToDoList/TodoList';
import { useState } from 'react';
import FormAddTask from '../components/ToDoList/FormAddTask';

const TodoListPage = () => {
    const [tasks, setTasks] = useState([
        { id: 1, name: 'Acheter du pain', done: false },
        { id: 2, name: 'Aller à la salle de sport', done: true },
        { id: 3, name: 'Lire un livre', done: false },]);

    return (
        <div className="main-content">
                <h1>Ma liste de tâches</h1>
                <ToDoList tasks={tasks} setTasks={setTasks}/>
                <FormAddTask setTasks={setTasks} />
        </div>
    );
};

export default TodoListPage;