import React, { useState } from 'react';

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

function DayPicker({ theme }) {
    const [selectedDayIndex, setSelectedDayIndex] = useState(0);
    const [selectedDate, setSelectedDate] = useState(new Date());

    const handlePrevDay = () => {
        setSelectedDayIndex((prevIndex) => (prevIndex === 0 ? 6 : prevIndex - 1));
        updateSelectedDate(selectedDayIndex - 1);
    };

    const handleNextDay = () => {
        setSelectedDayIndex((prevIndex) => (prevIndex === 6 ? 0 : prevIndex + 1));
        updateSelectedDate(selectedDayIndex + 1);
    };

    const updateSelectedDate = (index) => {
        const today = new Date();
        const newSelectedDate = new Date(today);
        newSelectedDate.setDate(today.getDate() + index);
        setSelectedDate(newSelectedDate);
    };

    const currentDate = () => {
        const day = selectedDate.getDay();
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