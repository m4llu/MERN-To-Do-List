import React from 'react';

function Task(props) {
    const handleDelete = async () => {
        try {
            await fetch(`http://localhost:3001/${props.id}`, {
                method: 'DELETE'
            });
            props.setUpdateFlag(prev => !prev); // Trigger update in List component
        } catch (error) {
            console.error("Error deleting task:", error);
        }
    };

    return (
        <div className="task" style={{ backgroundColor: props.color }}>
            <button className="removeButton" onClick={handleDelete}>X</button>
            <h2>{props.title}</h2>
            <p>{props.description}</p>
        </div>
    );
}

export default Task;