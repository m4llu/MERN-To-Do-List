import React, { useState, useEffect } from 'react';

// saveDataToBackend function
function saveDataToBackend(taskData, setUpdateFlag, resetTaskData) {
    const url = taskData.id ? `http://localhost:3001/${taskData.id}` : 'http://localhost:3001/';
    const method = taskData.id ? 'PUT' : 'POST';

    fetch(url, {
        method: method,
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title: taskData.title, color: taskData.color, description: taskData.description }),
    })
    .then(response => response.json())
    .then(data => {
        console.log('Data saved:', data);
        setUpdateFlag(prev => !prev);
        resetTaskData(); // Reset taskData after the save operation is completed
    })
    .catch(error => {
        console.error('Error saving data:', error);
    });
}

function TaskCreator({ onTaskAdded, onTaskEdited, theme, isTaskSelected, selectedTask }) {
    const [selectedColor, setSelectedColor] = useState('');
    const [taskData, setTaskData] = useState({
        id: '', 
        title: '',
        color: '',
        description: ''
    });

    useEffect(() => {
        if (isTaskSelected && selectedTask) {
            setTaskData(selectedTask);
            setSelectedColor(selectedTask.color);
        } else {
            setTaskData({ id: null, title: '', color: '', description: '' }); // Reset taskData
            setSelectedColor(theme.color1);
        }
    }, [isTaskSelected, selectedTask, theme]);

    const handleColorClick = (color) => {
        setTaskData({ ...taskData, color: color });
        setSelectedColor(color);
    };

const handleAddTask = () => {
    if (isTaskSelected && selectedTask) {
        // If a task is selected, update it
        const updatedTaskData = { ...taskData, id: selectedTask.id }; // Preserve the ID of the selected task
        saveDataToBackend(updatedTaskData, () => {
            onTaskEdited();
            // Reset taskData after the save operation is completed
            setTaskData({ id: null, title: '', color: '', description: '' });
            setSelectedColor(theme.color1);
        });
    } else {
        // Otherwise, add a new task
        saveDataToBackend(taskData, () => {
            onTaskAdded();
            // Reset taskData after the save operation is completed
            setTaskData({ id: null, title: '', color: '', description: '' });
            setSelectedColor(theme.color1);
        });
    }
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
                {isTaskSelected ? (
                    <button
                        className='add'
                        style={{
                            backgroundColor: theme.color1,
                            boxShadow: theme.glow2 ? `0 0 15px ${theme.glow2}` : 'inset 0px 4px 4px #00000040'
                        }} // Set the button color
                        onClick={handleAddTask}>
                        EDIT
                    </button>
                ) : (
                    <button
                        className='add'
                        style={{
                            backgroundColor: taskData.color || theme.color1,
                            boxShadow: theme.glow2 ? `0 0 15px ${theme.glow2}` : 'inset 0px 4px 4px #00000040'
                        }} // Set the button color
                        onClick={handleAddTask}>
                        ADD
                    </button>
                )}
            </div>
        </div>
    );
}

export default TaskCreator;