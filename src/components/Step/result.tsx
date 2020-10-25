import React from 'react';

import { ticketService } from 'service/ticketService';

export const Result: React.FC<{ history: string[] }> = ({history}) => {

  const state = ticketService.getState();

  console.log(ticketService.getTickets());

  const onPrevious = () =>  {
    history.push("./step5");
  }

  const onNext = () =>  {
    // sumbit answer
  }

  return (
    <div className="form-group w-75">
      Result

      <button className="btn btn-primary" onClick={onPrevious}>Previous</button>
      <button className="btn btn-primary" onClick={onNext}>Submit</button>
    </div>
  );
};
