import React, { useState } from 'react';

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

function DayPicker() {
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

    return (
        <div className="dayPicker">
            <div className="arrow" onClick={handlePrevDay}>{'<'}</div>
            <div className="dayInfo">
                <p className="day">{days[selectedDayIndex]}</p>
                <p>{currentDate()}</p>
            </div>
            <div className="arrow" onClick={handleNextDay}>{'>'}</div>
        </div>
    );
}

export default DayPicker;