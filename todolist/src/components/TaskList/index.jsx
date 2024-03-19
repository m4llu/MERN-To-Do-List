import React, { useState, useEffect } from 'react';
import Task from './task';

function List() {
    const [tasks, setTasks] = useState([]);

    const fetchTasks = () => {
        fetch('http://localhost:3001/')
            .then(response => response.json())
            .then(data => {
                setTasks(data); // Set the retrieved tasks in the state
            })
            .catch(error => {
                console.error('Error fetching tasks:', error);
            });
    };

    useEffect(() => {
        fetchTasks();
    }, []);

    const handleRefresh = () => {
        fetchTasks();
    };

    return (
        <div className="list">
            <button onClick={handleRefresh}>Refresh</button>
            {Array.isArray(tasks) && tasks.map(task => (
                <Task
                    key={task._id} // Assuming each task has a unique ID
                    title={task.title}
                    description={task.description} // Update from 'contents' to 'description'
                    color={task.color}
                />
            ))}
        </div>
    );
}

export default List;