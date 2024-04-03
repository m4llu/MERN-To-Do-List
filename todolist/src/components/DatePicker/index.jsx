import React from 'react';

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

function DayPicker({ theme, selectedDate, setSelectedDate }) {
    const handlePrevDay = () => {
        const newSelectedDate = new Date(selectedDate);
        newSelectedDate.setDate(selectedDate.getDate() - 1);
        setSelectedDate(newSelectedDate); // Update selected date in the App component
    };
    
    const handleNextDay = () => {
        const newSelectedDate = new Date(selectedDate);
        newSelectedDate.setDate(selectedDate.getDate() + 1);
        setSelectedDate(newSelectedDate); // Update selected date in the App component
    };

    const currentDate = () => {
        const date = selectedDate.getDate();
        const month = selectedDate.getMonth();
        const year = selectedDate.getFullYear();

        return `${date} ${new Intl.DateTimeFormat('en-US', { month: 'long' }).format(new Date(year, month))} ${year}`;
    };

    // Determine the index of the selected day based on the selectedDate
    const selectedDayIndex = selectedDate.getDay();

    const textStyles = {
        color: theme.mainText,
        textShadow: theme.glow ? `0 0 5px ${theme.glow}` : 'none'
    };
    

    return (
        <div className="dayPicker">
            <button className="arrow" onClick={handlePrevDay} style={{ color: theme.mainText, textShadow: theme.glow ? `0 0 5px ${theme.glow}` : 'none' }}>{'<'}</button>
            <div className="dayInfo">
                <p className="day" style={textStyles}>{days[selectedDayIndex]}</p>
                <p style={{ color: theme.secondaryText, textShadow: theme.glow ? `0 0 5px ${theme.glow}` : 'none' }}>{currentDate()}</p>
            </div>
            <button className="arrow" onClick={handleNextDay} style={{ color: theme.mainText, textShadow: theme.glow ? `0 0 5px ${theme.glow}` : 'none' }}>{'>'}</button>
        </div>
    );
}

export default DayPicker;