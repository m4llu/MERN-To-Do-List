// List.js
import React, { useState, useEffect } from 'react';
import Task from './task'; // Assuming the Task component file is named Task.js

function List({ updateFlag, setUpdateFlag, theme, onSelect }) { // Add onSelect prop
    const [tasks, setTasks] = useState([]);
    const [selectedTaskId, setSelectedTaskId] = useState(null); // State to track selected task ID

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

    const handleTaskSelect = (taskId) => {
        setSelectedTaskId(taskId);
        onSelect(taskId); // Call onSelect prop to update selectedTaskId in App.js
    };

    return (
        <div className="list" style={{ backgroundColor: theme.inputBackground }}>            
            {Array.isArray(tasks) && tasks.map(task => (
                <Task
                    key={task.id}
                    id={task.id}
                    title={task.title}
                    description={task.description}
                    color={task.color}
                    setUpdateFlag={setUpdateFlag}
                    onSelect={handleTaskSelect} // Pass handleTaskSelect to Task component
                    selectedTaskId={selectedTaskId} // Pass selectedTaskId to Task component
                    theme={theme} // Pass theme to Task component
                />
            ))}
        </div>
    );
}

export default List;