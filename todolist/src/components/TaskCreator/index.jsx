import React, { useState, useEffect } from 'react';

function saveDataToBackend(taskData, setUpdateFlag, defaultColor) {
    const url = taskData.id ? `http://localhost:3001/${taskData.id}` : 'http://localhost:3001/';
    const method = taskData.id ? 'PUT' : 'POST';

    const dateToSend = method === 'POST' ? taskData.date.toISOString().slice(0, 10) : taskData.date ? taskData.date.toISOString().slice(0, 10) : undefined;

    // Check if task color is null and assign theme.color1 if it is
    const colorToSend = taskData.color ? taskData.color : defaultColor;

    const dataToSend = {
        title: taskData.title,
        color: colorToSend,
        description: taskData.description,
        date: dateToSend,
    };

    fetch(url, {
        method: method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(dataToSend),
    })
    .then(response => response.json())
    .then(data => {
        console.log('Data saved:', data);
        setUpdateFlag(prev => !prev);
    })
    .catch(error => console.error('Error saving data:', error));
}

function TaskCreator({ onTaskAdded, theme, selectedTask, selectedDate }) {
    const [selectedColor, setSelectedColor] = useState('');
    const [taskData, setTaskData] = useState({
        id: '',
        title: '',
        color: '',
        description: '',
        date: selectedDate || new Date()
    });

    useEffect(() => {
        console.log("Selected Task:", selectedTask);
        if (selectedTask) {
            setTaskData(selectedTask);
            setSelectedColor(selectedTask.color);
        } else {
            setTaskData(prevData => ({
                ...prevData,
                date: selectedDate || prevData.date || new Date() // Only update date when selectedDate changes
            }));
            setSelectedColor(theme.color1);
        }
    }, [selectedTask, selectedDate, theme]);

    const handleColorClick = (color) => {
        setTaskData({ ...taskData, color: color });
        setSelectedColor(color);
    };

    const handleAddTask = () => {
        const updatedTaskData = { ...taskData, id: selectedTask?.id };
        delete updatedTaskData.date;

        if (!selectedTask) {
            updatedTaskData.date = taskData.date || selectedDate || new Date();
        }

        saveDataToBackend(updatedTaskData, () => {
            onTaskAdded();
            setTaskData({ id: '', title: '', color: '', description: '', date: '' });
            setSelectedColor(theme.color1);
            
        }, theme.color1);
    };

    return (
        <div className="taskCreator">
            <div className="top">
                <input
                    className="titleInput"
                    value={taskData.title}
                    onChange={(e) => setTaskData({ ...taskData, title: e.target.value })}
                    style={{
                        backgroundColor: theme.inputBackground,
                        color: theme.inputText,
                        boxShadow: theme.glow2 ? `0 0 15px ${theme.glow2}` : 'inset 0px 4px 4px #00000040'
                    }}
                />
                <div className="colorSelector"
                    style={{
                        backgroundColor: theme.inputBackground,
                        boxShadow: theme.glow2 ? `0 0 15px ${theme.glow2}` : 'inset 0px 4px 4px #00000040'
                    }}>
                    {Object.values(theme).slice(0, 6).map((color, index) => (
                        <div key={index} className={`color ${selectedColor === color ? 'selected' : ''}`} style={{ backgroundColor: color }} onClick={() => handleColorClick(color)}></div>
                    ))}
                </div>
            </div>
            <div className='bottom'>
                <textarea
                    cols={40}
                    rows={5}
                    className="taskInput"
                    value={taskData.description}
                    onChange={(e) => setTaskData({ ...taskData, description: e.target.value })}
                    style={{
                        backgroundColor: theme.inputBackground,
                        color: theme.inputText,
                        boxShadow: theme.glow2 ? `0 0 15px ${theme.glow2}` : 'inset 0px 4px 4px #00000040'
                    }}
                ></textarea>
                <button
                    className='add'
                    style={{
                        backgroundColor: selectedColor,
                        boxShadow: theme.glow2 ? `0 0 15px ${theme.glow2}` : 'inset 0px 4px 4px #00000040'
                    }}
                    onClick={handleAddTask}>
                    {selectedTask ? 'EDIT' : 'ADD'}
                </button>
            </div>
        </div>
    );
}

export default TaskCreator;