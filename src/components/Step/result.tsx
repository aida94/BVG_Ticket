import React from 'react';

import { ticketService } from 'service/ticketService';

export const Result: React.FC<{ history: string[] }> = ({history}) => {

  const state = ticketService.getState();

  const onPrevious = () =>  {
    history.push("./");
  }

  const onNext = () =>  {
    // sumbit answer
    history.push("./tickets");
  }

  return (
    <div className="form-group w-75">
      Your Result

      1. How much day will last your travel?
      {state.duration}

      2. What travel methods do you want to use?
      {state.travelMethod}

      3. What zone of Berlin do you want to travel?
      {state.fareZone}

      4. Do you have Berlin Pass?
      {state.berlinPass}

      5. Are you planing to visit Berlin Attractions?
      {state.visitAtractions}

      <button className="btn btn-primary" onClick={onPrevious}>Change your answer</button>
      <button className="btn btn-primary" onClick={onNext}>Submit</button>
    </div>
  );
};
