import React, { useState } from 'react';

import { ticketService } from 'service/ticketService';

export const Step2: React.FC<{ history: string[] }> = ({history}) => {

  const [travelMethod, setTravelMethodValue] = useState<'bike' | 'other'>(ticketService.getQuestions().travelMethod);

  const onChange = (value: 'bike' | 'other') =>  {
    setTravelMethodValue(value);
  }

  const onNext = () =>  {
    history.push("./step3");
    ticketService.setTravelMethod(travelMethod);
  }

  return (
    <div>
      <h4 className="mb-5">Answer some simple question to get a better ticket suggestion </h4>

      <div className="form-group w-75">
        <label className="float-left">2. What travel methods do you want to use? </label>

        <div className="row">
          <div className="col form-check">
            <input
              className="form-check-input"
              type="radio"
              name="travelMethod"
              id="bike"
              value="bike"
              onChange={(e) => onChange(e.target.value as 'bike' | 'other' )}
              checked={travelMethod === 'bike'}/>
            <label className="form-check-label" htmlFor="bike">
              Bike
            </label>
          </div>
          <div className="col form-check">
            <input
              className="form-check-input"
              type="radio"
              name="travelMethod"
              id="other"
              value="other"
              onChange={(e) => onChange(e.target.value as 'bike' | 'other' )}
              checked={travelMethod === 'other'}/>
            <label className="form-check-label" htmlFor="other">
              Other Transport
            </label>
            <span className="text-muted">(bus, tram, metro, train)</span>
          </div>
        </div>

      </div>

      <div className="mt-5">
        <button className="btn btn-next" onClick={onNext}>Next</button>
      </div>

    </div>
  );
};
