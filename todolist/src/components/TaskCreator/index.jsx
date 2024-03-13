import React, { useState } from 'react';

const color1 = 'rgba(140, 56, 56, 1)';
const color2 = 'rgba(138, 140, 56, 1)';
const color3 = 'rgba(56, 140, 110, 1)';
const color4 = 'rgba(71, 127, 158, 1)';
const color5 = 'rgba(140, 56, 137, 1)';
const color6 = 'rgba(73, 56, 140, 1)';

function TaskCreator() {
    const [selectedColor, setSelectedColor] = useState('');

    const handleColorClick = (color) => {
        setSelectedColor(color);
    };

    return (
        <div className="taskCreator">
            <div className="top">
                <input className="titleInput"></input>
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
                <textarea cols={40} rows={5} className="taskInput"></textarea>
                <button className='add' style={{backgroundColor: selectedColor}}>ADD</button>
            </div>
            
        </div>
    );
}

export default TaskCreator;