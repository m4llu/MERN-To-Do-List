import React, { useState } from 'react';

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

function DayPicker({ theme }) {
    const [selectedDayIndex, setSelectedDayIndex] = useState(0);
    const [selectedDate, setSelectedDate] = useState(new Date());

    const handlePrevDay = () => {
        const newSelectedDate = new Date(selectedDate);
        newSelectedDate.setDate(selectedDate.getDate() - 1);
        setSelectedDate(newSelectedDate);
        setSelectedDayIndex((selectedDayIndex === 0 ? 6 : selectedDayIndex - 1));
    };

    const handleNextDay = () => {
        const newSelectedDate = new Date(selectedDate);
        newSelectedDate.setDate(selectedDate.getDate() + 1);
        setSelectedDate(newSelectedDate);
        setSelectedDayIndex((selectedDayIndex === 6 ? 0 : selectedDayIndex + 1));
    };

    const currentDate = () => {
        const date = selectedDate.getDate();
        const month = selectedDate.getMonth();
        const year = selectedDate.getFullYear();

        return `${date} ${new Intl.DateTimeFormat('en-US', { month: 'long' }).format(new Date(year, month))} ${year}`;
    };

    const textStyles = {
        color: theme.mainText,
        textShadow: theme.glow ? `0 0 5px ${theme.glow}` : 'none'
    };

    return (
        <div className="dayPicker">
            <button className="arrow" onClick={handlePrevDay} style={{ color: theme.mainText, textShadow: theme.glow ? `0 0 5px ${theme.glow}` : 'none'  }}>{'<'}</button>
            <div className="dayInfo">
                <p className="day" style={textStyles}>{days[selectedDayIndex]}</p>
                <p style={{ color: theme.secondaryText, textShadow: theme.glow ? `0 0 5px ${theme.glow}` : 'none' }}>{currentDate()}</p>
            </div>
            <button className="arrow" onClick={handleNextDay} style={{ color: theme.mainText, textShadow: theme.glow ? `0 0 5px ${theme.glow}` : 'none'  }}>{'>'}</button>
        </div>
    );
}

export default DayPicker;
