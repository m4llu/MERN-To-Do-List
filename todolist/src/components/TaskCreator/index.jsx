import React, { useState } from 'react';

const color1 = 'rgba(140, 56, 56, 1)';
const color2 = 'rgba(138, 140, 56, 1)';
const color3 = 'rgba(56, 140, 110, 1)';
const color4 = 'rgba(71, 127, 158, 1)';
const color5 = 'rgba(140, 56, 137, 1)';
const color6 = 'rgba(73, 56, 140, 1)';

function saveDataToBackend(taskData) {
    fetch('http://localhost:3001/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title: taskData.title, color: taskData.color, description: taskData.description }),
    })
    .then(response => response.json())
    .then(data => {
        console.log('Data saved:', data);
        // Handle success response
    })
    .catch(error => {
        console.error('Error saving data:', error);
        // Handle error
    });
}
function TaskCreator() {
    const [selectedColor, setSelectedColor] = useState('');

    const [taskData, setTaskData] = useState({
        title: '',
        color: '',
        description: ''
    });

    const handleColorClick = (color) => {
        setTaskData({ ...taskData, color: color });
        setSelectedColor(color);
    };

    const handleAddTask = () => {
        saveDataToBackend(taskData);
        // You can also reset the taskData state here if needed
        setTaskData({
            title: '',
            color: '',
            description: ''
        });
    };

    return (
        <div className="taskCreator">
            <div className="top">
                <input
                    className="titleInput"
                    value={taskData.title}
                    onChange={(e) => setTaskData({ ...taskData, title: e.target.value })}
                />
                <div className="colorSelector">
                    <div className={`color ${selectedColor === color1 ? 'selected' : ''}`} style={{ backgroundColor: color1 }} onClick={() => handleColorClick(color1)}></div>
                    <div className={`color ${selectedColor === color2 ? 'selected' : ''}`} style={{ backgroundColor: color2 }} onClick={() => handleColorClick(color2)}></div>
                    <div className={`color ${selectedColor === color3 ? 'selected' : ''}`} style={{ backgroundColor: color3 }} onClick={() => handleColorClick(color3)}></div>
                    <div className={`color ${selectedColor === color4 ? 'selected' : ''}`} style={{ backgroundColor: color4 }} onClick={() => handleColorClick(color4)}></div>
                    <div className={`color ${selectedColor === color5 ? 'selected' : ''}`} style={{ backgroundColor: color5 }} onClick={() => handleColorClick(color5)}></div>
                    <div className={`color ${selectedColor === color6 ? 'selected' : ''}`} style={{ backgroundColor: color6 }} onClick={() => handleColorClick(color6)}></div>
                </div>
            </div>
            <div className='bottom'>
                <textarea
                    cols={40}
                    rows={5}
                    className="taskInput"
                    value={taskData.description}
                    onChange={(e) => setTaskData({ ...taskData, description: e.target.value })}
                ></textarea>
                <button
                    className='add'
                    style={{ backgroundColor: taskData.color }}
                    onClick={handleAddTask}
                >
                    ADD
                </button>
            </div>
        </div>
    );
}

export default TaskCreator;