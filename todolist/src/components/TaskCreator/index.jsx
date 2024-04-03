import React, { useState, useEffect } from 'react';

// saveDataToBackend function
// saveDataToBackend function
// saveDataToBackend function
function saveDataToBackend(taskData, setUpdateFlag, resetTaskData) {
    const url = taskData.id ? `http://localhost:3001/${taskData.id}` : 'http://localhost:3001/';
    const method = taskData.id ? 'PUT' : 'POST';

    // Convert selectedDate to ISO string and slice to get only date part
    const dateToSend = taskData.selectedDate.toISOString().slice(0, 10);
    
    const dataToSend = {
        title: taskData.title,
        color: taskData.color,
        description: taskData.description,
        date: dateToSend // Send date in YYYY-MM-DD format
    };

    fetch(url, {
        method: method,
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataToSend),
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

function TaskCreator({ onTaskAdded, onTaskEdited, theme, selectedTask, selectedDate }) {
    const [selectedColor, setSelectedColor] = useState('');
    const [taskData, setTaskData] = useState({
        id: '',
        title: '',
        color: '',
        description: '',
        date: ''
    });

    useEffect(() => {
        console.log("Selected Task:", selectedTask); // Add this line
        if (selectedTask) {
            setTaskData(selectedTask);
            setSelectedColor(selectedTask.color);
        } else {
            setTaskData(prevData => ({
                ...prevData,
                color: prevData.color || theme.color1
            }));
            setSelectedColor(theme.color1);
        }
    }, [selectedTask, theme]);

    const handleColorClick = (color) => {
        setTaskData({ ...taskData, color: color });
        setSelectedColor(color);
    };

    const handleAddTask = () => {
        if (selectedTask) {
            const updatedTaskData = { ...taskData, id: selectedTask.id };
            saveDataToBackend(updatedTaskData, () => {
                onTaskEdited();
                setTaskData({ id: '', title: '', color: '', description: '', date: '' }); // Reset taskData
                setSelectedColor(theme.color1);
            });
        } else {
            const newTaskData = {
                ...taskData,
                color: taskData.color || theme.color1,
                date: selectedDate // Use selectedDate instead of date
            };
            saveDataToBackend(newTaskData, () => {
                onTaskAdded();
                setTaskData({ id: '', title: '', color: '', description: '', date: '' }); // Reset taskData
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
                {selectedTask && ( // Render edit button only if task is selected
                    <button
                        className='add'
                        style={{
                            backgroundColor: selectedColor,
                            boxShadow: theme.glow2 ? `0 0 15px ${theme.glow2}` : 'inset 0px 4px 4px #00000040'
                        }}
                        onClick={handleAddTask}>
                        EDIT
                    </button>
                )}
                {!selectedTask && ( // Render add button if no task is selected
                    <button
                        className='add'
                        style={{
                            backgroundColor: selectedColor,
                            boxShadow: theme.glow2 ? `0 0 15px ${theme.glow2}` : 'inset 0px 4px 4px #00000040'
                        }}
                        onClick={handleAddTask}>
                        ADD
                    </button>
                )}
            </div>
        </div>
    );
}

export default TaskCreator;