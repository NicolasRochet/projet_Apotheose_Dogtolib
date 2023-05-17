import React from 'react';
import RemindersItem from './RemindersItem';

import './Reminders.scss';

function Reminders() {
  const reminders = [
    {
      id: 1,
      date: 'Mercredi 10 mai 2023',
      hour: '16h',
      title: 'Opération',
      description: 'Intervention chirurgicale à la patte de gauche pour Berlioz',
    },
    {
      id: 2,
      date: 'Mercredi 10 mai 2023',
      hour: '16h',
      title: 'Opération',
      description: 'Intervention chirurgicale à la patte de gauche pour Berlioz',
    },
  ];
  return (
    <section className="reminders">
      <h2>Mes rendez-vous et rappels à venir</h2>
      <ul className="reminders-list">
        {
          reminders.map((reminder) => (
            <RemindersItem key={reminder.id} reminder={reminder} />
          ))
        }
      </ul>
    </section>
  );
}

export default Reminders;
