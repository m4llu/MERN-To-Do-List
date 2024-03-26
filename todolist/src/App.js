// App.js
import React, { useState } from 'react';
import './App.css';
import TopNav from './components/nav';
import DayPicker from './components/DatePicker/index';
import TaskCreator from './components/TaskCreator';
import List from './components/TaskList/index'; // Fix import path

function App() {
    const [updateFlag, setUpdateFlag] = useState(false); // Define updateFlag state

    const handleTaskAdded = () => {
        setUpdateFlag(prev => !prev); // Trigger update in List component
    };

    return (
        <div className="App">
            <TopNav />
            <DayPicker />
            <TaskCreator onTaskAdded={handleTaskAdded} />
            <List updateFlag={updateFlag} setUpdateFlag={setUpdateFlag} /> {/* Pass updateFlag and setUpdateFlag as props */}
        </div>
    );
}

export default App;