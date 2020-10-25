import React from 'react';

import { ticketService } from 'service/ticketService';
import { Ticket } from 'components/Tickets/ticket';

export const Tickets: React.FC = () => {
  const normalTickets = ticketService.getNormalTickets();
  const touristTickets = ticketService.getTouristTickets();

  return (
    <div>
      <h4 className="mb-5">Your tickets suggestion</h4>

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


      {touristTickets.length > 0 && (
        <div>
          <h5 className="text-left">Tourist Tickets</h5>
          <div className="row mt-3 mb-4">
            {touristTickets.map((data, index) => (
              <Ticket key={index} data={data}/>
            ))}
          </div>
        </div>
      )}

    </div>
  );
};
