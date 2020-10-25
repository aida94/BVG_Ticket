import React from 'react';

import { ticketService } from 'service/ticketService';

export const Tickets: React.FC = () => {
  const normalTickets = ticketService.getNormalTickets();
  const turistTickets = ticketService.getTuristTickets();

  return (
    <div className="form-group w-75">
      Your tickets sugestion

      {normalTickets.length > 0 && (
        <div>
          Normal Tickets
          {normalTickets.map((e, index) => (
            <div key={index}> {e.name}</div>
          ))}
        </div>
      )}


      {turistTickets.length > 0 && (
        <div>
          turist Tickets
          {turistTickets.map((e, index) => (
            <div key={index}> {e.name}</div>
          ))}
        </div>
      )}

    </div>
  );
};
