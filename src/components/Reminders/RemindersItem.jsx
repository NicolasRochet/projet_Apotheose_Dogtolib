import React from 'react';

function RemindersItem({ reminder }) {
  return (
    <li className="reminders-item" key={reminder.id}>
      <header>
        {reminder.date}
        {' - '}
        {reminder.hour}
      </header>
      <main>
        <h3>{reminder.title}</h3>
        <p id="reminder-description" className='reminders-item-description'>{reminder.description}</p>
      </main>
    </li>
  );
}

export default RemindersItem;
