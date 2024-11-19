import React, { useState } from 'react';
import DatePicker from 'react-datepicker';

function LeaveScheduler() {
  const [selectedDates, setSelectedDates] = useState([]);

  const handleDateSelection = (date) => {
    setSelectedDates([...selectedDates, date]);
  };

  return (
    <div>
      <DatePicker onChange={handleDateSelection} />
      <ul>
        {selectedDates.map((date, index) => (
          <li key={index}>{date.toLocaleDateString()}</li>
        ))}
      </ul>
    </div>
  );
}

export default LeaveScheduler;
