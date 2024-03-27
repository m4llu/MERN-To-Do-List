import React, { useState, useEffect } from 'react';
import './App.css';
import TopNav from './components/nav';
import DayPicker from './components/DatePicker/index';
import TaskCreator from './components/TaskCreator';
import List from './components/TaskList/index';
import ThemeSelector from './components/ThemeSelector';
import themes from './components/themes';

function App() {
    const [updateFlag, setUpdateFlag] = useState(false);
    const [selectedTheme, setSelectedTheme] = useState(themes.defaultDark);
    const [selectedTaskId, setSelectedTaskId] = useState(null); // State to track selected task ID

    useEffect(() => {
        document.body.style.backgroundColor = selectedTheme.background;
    }, [selectedTheme]);

    const handleTaskAdded = () => {
        setUpdateFlag(prev => !prev);
    };

    const handleTaskSelect = (taskId) => {
        setSelectedTaskId(taskId);
    };

    const changeTheme = (theme) => {
        setSelectedTheme(theme);
    };

    return (
        <div className="App" style={{backgroundColor: selectedTheme.background}}>
            <TopNav theme={selectedTheme}>
                <ThemeSelector themes={themes} changeTheme={changeTheme} theme={selectedTheme} />
            </TopNav>
            <DayPicker theme={selectedTheme} />
            <TaskCreator onTaskAdded={handleTaskAdded} theme={selectedTheme} isTaskSelected={selectedTaskId !== null} />
            <List updateFlag={updateFlag} setUpdateFlag={setUpdateFlag} theme={selectedTheme} onSelect={handleTaskSelect} />
        </div>
    );
}

export default App;