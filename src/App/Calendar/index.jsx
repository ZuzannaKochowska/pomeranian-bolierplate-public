import React from 'react';
import './styles.css';

export function Calendar() {
  const daysOfWeek = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ];

  const daysOfMonthJanuary = Array.from({ length: 31 }, (_, i) =>
    String(i + 1).padStart(2, '0')
  );

  const daysOfMonthFebruary = Array.from({ length: 29 }, (_, i) =>
    String(i + 1).padStart(2, '0')
  );

  // Group days into weeks
  const weeksJanuary = [];
  while (daysOfMonthJanuary.length > 0) {
    weeksJanuary.push(daysOfMonthJanuary.splice(0, 7));
  }
  const weeksFebruary = [];
  while (daysOfMonthFebruary.length > 0) {
    weeksFebruary.push(daysOfMonthFebruary.splice(0, 7));
  }
  return (
    <div className="calendar">
      <h1>Kalendarz</h1>
      <h2>JANUARY 2024</h2>
      <table>
        <thead>
          <tr>
            {daysOfWeek.map((day, index) => (
              <th key={index}>{day}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {weeksJanuary.map((week, weekIndex) => (
            <tr key={weekIndex}>
              {week.map((day, dayIndex) => (
                <th key={dayIndex}>{day}</th>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      <h2>FEBRUARY 2024</h2>
      <table>
        <thead>
          <tr>
            {daysOfWeek.map((day, index) => (
              <th key={index}>{day}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {weeksFebruary.map((weeks2, weekIndex) => (
            <tr key={weekIndex}>
              {weeks2.map((day, dayIndex) => (
                <th key={dayIndex}>{day}</th>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
