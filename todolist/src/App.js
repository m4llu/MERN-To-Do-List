import React, { useState, useEffect } from 'react';
import './App.css';
import TopNav from './components/nav';
import DayPicker from './components/DatePicker/index';
import TaskCreator from './components/TaskCreator';
import List from './components/TaskList/index';
import ThemeSelector from './components/ThemeSelector';
import themes from './components/themes';

function App() {
    const [updateFlag, setUpdateFlag] = useState(false); // State to toggle list refresh
    const [selectedTheme, setSelectedTheme] = useState(themes.defaultDark);
    const [selectedTask, setSelectedTask] = useState(null); // State to track selected task data
    const [selectedDate, setSelectedDate] = useState(new Date()); // State to track the selected date

    useEffect(() => {
        document.body.style.backgroundColor = selectedTheme.background; // Set the body background from theme
    }, [selectedTheme]);

    const handleTaskAdded = () => {
        setUpdateFlag(prev => !prev); // Toggle list refresh
        setSelectedTask(undefined) // Remove task selection
    };


    const handleTaskSelect = (taskData) => {
        setSelectedTask(taskData); // Set the selected task data
    };

    const changeTheme = (theme) => {
        setSelectedTheme(theme);
    };

    return (
        <div className="App" style={{backgroundColor: selectedTheme.background}}>

            <TopNav theme={selectedTheme}> 
                <ThemeSelector themes={themes} changeTheme={changeTheme} theme={selectedTheme} />
            </TopNav>
 
            <DayPicker theme={selectedTheme} selectedDate={selectedDate} setSelectedDate={setSelectedDate} />

            <TaskCreator
                onTaskAdded={handleTaskAdded}
                theme={selectedTheme}
                selectedTask={selectedTask} // Pass selectedTask data to TaskCreator
                selectedDate={selectedDate}
            />

            <List
                updateFlag={updateFlag} 
                setUpdateFlag={setUpdateFlag}
                theme={selectedTheme}
                onSelect={handleTaskSelect}
                selectedDate={selectedDate}
                selectedTask={selectedTask}
            />

        </div>
    );
}

export default App;