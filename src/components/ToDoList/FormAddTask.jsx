import React from "react";

const FormAddTask = ({ setTasks }) => {
    const [newTask,setNewTask] = React.useState('');
    
    const handleSubmitForm = e => {
        e.preventDefault(); 
        if (!newTask.trim()) {
            return;
        }
        setTasks(prevTasks => [
            ...prevTasks,
            { id : prevTasks.length + 1, name : newTask, done: false}
        ]);
        setNewTask('');
    };

    return (
        <div className="main-content">
            <h2>Planifier une nouvelle tâche</h2>
            <form onSubmit={handleSubmitForm} style={{display: 'flex', flexDirection: 'column'}}>
                <label>Titre de la tâche à ajouter</label>
                <input type="text" value={newTask} onChange={e => setNewTask(e.target.value)} />
                <button type="submit">Ajouter</button>
            </form>
        </div>
    );
}

export default FormAddTask;