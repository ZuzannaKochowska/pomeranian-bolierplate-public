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

  const daysOfMonth = Array.from({ length: 31 }, (_, i) =>
    String(i + 1).padStart(2, '0')
  );

  const daysOfMonth2 = Array.from({ length: 29 }, (_, i) =>
    String(i + 1).padStart(2, '0')
  );

  // Group days into weeks
  const weeks = [];
  while (daysOfMonth.length > 0) {
    weeks.push(daysOfMonth.splice(0, 7));
  }
  const weeks2 = [];
  while (daysOfMonth2.length > 0) {
    weeks2.push(daysOfMonth.splice(0, 7));
  }
  return (
    <div className="calendar">
      <h1>Kalendarz</h1>
      <h2>JANUARY</h2>
      <table>
        <thead>
          <tr>
            {daysOfWeek.map((day, index) => (
              <th key={index}>{day}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {weeks.map((week, weekIndex) => (
            <tr key={weekIndex}>
              {week.map((day, dayIndex) => (
                <td key={dayIndex}>{day}</td>
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
        <tbody></tbody>
      </table>
    </div>
  );
}
