import React from 'react';
import Wrapper from '../components/wrapper/Wrapper';
import ToDoList from '../components/ToDoList/TodoList';



const TodoListPage = () => {

    const tasks = [
    { id: 1, name: 'Acheter du pain', done: false },
    { id: 2, name: 'Aller à la salle de sport', done: true },
    { id: 3, name: 'Lire un livre', done: false },];

    return (
        <div className="main-content">
                <h1>Ma liste de tâches</h1>
                <ToDoList tasks={tasks} />
        </div>
    );
};

export default TodoListPage;