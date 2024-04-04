import React, { useState, useEffect } from 'react';
import Task from './task'; // Assuming the Task component file is named Task.js

function List({ updateFlag, setUpdateFlag, theme, onSelect, selectedDate, selectedTask }) { // Add selectedDate prop and selectedTask prop
    const [tasks, setTasks] = useState([]);

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

    // Convert selectedDate to "YYYY-MM-DD" format
    let formattedSelectedDate;
    try {
        formattedSelectedDate = new Date(selectedDate).toISOString().slice(0, 10);
    } catch (error) {
        console.error('Error converting selectedDate to "YYYY-MM-DD" format:', error);
        formattedSelectedDate = ""; // or set to null or any default value
    }

    const filteredTasks = tasks.filter(task => task.date === formattedSelectedDate);    

    

    return (
        <div className="list" style={{ backgroundColor: theme.inputBackground }}>            
            {Array.isArray(filteredTasks) && filteredTasks.map(task => (
                <Task
                    key={task.id}
                    id={task.id}
                    title={task.title}
                    description={task.description}
                    date={task.date}
                    color={task.color}
                    setUpdateFlag={setUpdateFlag}
                    onSelect={onSelect}
                    selectedTask={selectedTask}
                    theme={theme} 
                />
            ))}
        </div>
    );
}

export default List;