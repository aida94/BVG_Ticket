import React from 'react';

import { ticketService } from 'service/ticketService';

export const Result: React.FC<{ history: string[] }> = ({history}) => {

  const questions = ticketService.getQuestions();

  const onPrevious = () =>  {
    history.push("./");
    ticketService.resetTickets()
  }

  const onNext = () =>  {
    history.push("./tickets");
  }

  return (
    <div>
      <h4 className="mb-5">Your Answer</h4>

      <div className="row mb-3">
        <div className="col-5 offset-2 text-left">
          1. How many days will your stay in Berlin?
        </div>
        <div className="col-3">
          {questions.duration}
        </div>
      </div>

      <div className="row mb-3">
        <div className="col-5 offset-2 text-left">
          2. What travel methods do you want to use?
        </div>
        <div className="col-3">
          {questions.travelMethod === 'other' ? 'Bus, Tram, Metro, Train' : 'Bike'}
        </div>
      </div>

      <div className="row mb-3">
        <div className="col-5 offset-2 text-left">
          3. What zone of Berlin do you want to visit?
        </div>
        <div className="col-3">
          {questions.fareZone}
        </div>
      </div>

      <div className="row mb-3">
        <div className="col-5 offset-2 text-left">
          4. Do you have Berlin Pass?
        </div>
        <div className="col-3">
          {questions.berlinPass ? 'Yes' : 'No'}
        </div>
      </div>

      <div className="row mb-3">
        <div className="col-5 offset-2 text-left">
          5. Do you plan to visit Berlin Attractions?
        </div>
        <div className="col-3">
          {questions.visitAtractions ? 'Yes' : 'No'}
        </div>
      </div>

      <div className="row m-5 justify-content-center">
        <button className="btn btn-first mr-3" onClick={onPrevious}>Change your answer</button>
        <button className="btn btn-next" onClick={onNext}>Submit</button>
      </div>

    </div>
  );
};
