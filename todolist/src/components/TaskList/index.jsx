import React, { useState, useEffect } from 'react';
import Task from './task';

function List() {
    const [tasks, setTasks] = useState([]);
    const [updateFlag, setUpdateFlag] = useState(false); // State variable to trigger updates

    const fetchTasks = () => {
        fetch('http://localhost:3001/')
            .then(response => response.json())
            .then(data => {
                console.log('Fetched tasks:', data);
                setTasks(data);
            })
            .catch(error => {
                console.error('Error fetching tasks:', error);
            });
    };

    useEffect(() => {
        fetchTasks();
    }, [updateFlag]); // Run fetchTasks whenever updateFlag changes

    const handleRefresh = () => {
        setUpdateFlag(!updateFlag); // Toggle updateFlag to trigger re-fetch
    };

    return (
        <div className="list">            
            {Array.isArray(tasks) && tasks.map(task => (
                <Task
                    key={task.id}
                    id={task.id}
                    title={task.title}
                    description={task.description}
                    color={task.color}
                    setUpdateFlag={setUpdateFlag} // Pass setUpdateFlag to Task component
                />
            ))}
        </div>
    );
}

export default List;