import React from 'react';

import { ticketService } from 'service/ticketService';
import { Ticket } from 'components/Tickets/ticket';

export const Tickets: React.FC = () => {
  const normalTickets = ticketService.getNormalTickets();
  const turistTickets = ticketService.getTuristTickets();

  return (
    <div>
      <h4 className="mb-5">Your tickets sugestion</h4>

      {normalTickets.length > 0 && (
        <div>
          <h5 className="text-left">Normal Tickets</h5>
          <div className="row mt-3 mb-4">
            {normalTickets.map((data, index) => (
              <Ticket key={index} data={data}/>
            ))}
          </div>
        </div>
      )}


      {turistTickets.length > 0 && (
        <div>
          <h5 className="text-left">Turist Tickets</h5>
          <div className="row mt-3 mb-4">
            {turistTickets.map((data, index) => (
              <Ticket key={index} data={data}/>
            ))}
          </div>
        </div>
      )}

    </div>
  );
};
