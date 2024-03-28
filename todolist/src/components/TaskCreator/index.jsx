import React, { useState, useEffect } from 'react';

// saveDataToBackend function
function saveDataToBackend(taskData, setUpdateFlag) {
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
    })
    .catch(error => {
        console.error('Error saving data:', error);
    });
}

function TaskCreator({ onTaskAdded, theme, isTaskSelected }) {
    const [selectedColor, setSelectedColor] = useState('');
    const [taskData, setTaskData] = useState({
        title: '',
        color: '',
        description: ''
    });

    useEffect(() => {
        // Set the first color as selected when the component mounts or when the theme changes
        setSelectedColor(theme.color1);
    }, [theme.color1]);

    useEffect(() => {
        // Update the button color when the theme changes
        setSelectedColor(theme.color1);
    }, [theme]);

    const handleColorClick = (color) => {
        setTaskData({ ...taskData, color: color });
        setSelectedColor(color);
    };

    const colorArray = [theme.color1, theme.color2, theme.color3, theme.color4, theme.color5, theme.color6];

    const handleAddTask = () => {
        saveDataToBackend(taskData, () => {
            onTaskAdded(); 
        });
        setTaskData({
            title: '',
            color: '',
            description: ''
        });
        // Set the button color to the first color
        setSelectedColor(theme.color1);
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
                    {colorArray.map((color, index) => (
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