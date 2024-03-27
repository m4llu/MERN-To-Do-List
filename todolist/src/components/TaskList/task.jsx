import React from 'react';

function Task(props) {
    const isSelected = props.selectedTaskId === props.id;

    const handleDelete = async () => {
        try {
            await fetch(`http://localhost:3001/${props.id}`, {
                method: 'DELETE'
            });
            // Check if the deleted task was selected
            if (isSelected) {
                props.onSelect(null); // Deselect the task
            }
            props.setUpdateFlag(prev => !prev); // Trigger update in List component
        } catch (error) {
            console.error("Error deleting task:", error);
        }
    };

    const handleTaskClick = () => {
        // Toggle task selection status
        const newSelectedTaskId = isSelected ? null : props.id;
        props.onSelect(newSelectedTaskId);
    };

    return (
        <div 
            className={`task ${isSelected ? 'selected' : ''}`} 
            style={{ backgroundColor: props.color }} 
            onClick={handleTaskClick} // Handle task click to toggle selection
        >
            <div className='buttonContainer'>
                <button className="taskButton" onClick={handleDelete}>X</button>
            </div>
            <h2>{props.title}</h2>
            <p>{props.description}</p>
        </div>
    );
}

export default Task;