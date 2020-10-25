import React, { useState } from 'react';

import { ticketService } from 'service/ticketService';

export const Step5: React.FC<{ history: string[] }> = ({history}) => {

  const [visitAtractions, setvisitAtractions] = useState<boolean>(ticketService.getState().visitAtractions);

  const onChange = (value: boolean) =>  {
    setvisitAtractions(value);
  }

  const onNext = () =>  {
    history.push("./result");
    ticketService.setVisitAtractionsfunc(visitAtractions);
  }

  return (
    <div>
      <h4 className="mb-5">Answer some simple question to get a better ticket suggestion </h4>

      <div className="form-group w-75">
        <label className="float-left">5. Are you planing to visit Berlin Attractions? </label>

        <div className="row">
          <div className="col form-check">
            <input
              className="form-check-input"
              type="radio"
              name="visitAtractions"
              id="true"
              value="true"
              onChange={() => onChange(true)}
              checked={visitAtractions === true}/>
            <label className="form-check-label" htmlFor="true">
              Yes
            </label>
            <span className="text-muted">(Special tickets with discount offers on different partners.)</span>
          </div>
          <div className="col form-check">
            <input
              className="form-check-input"
              type="radio"
              name="visitAtractions"
              id="false"
              value="false"
              onChange={() => onChange(false)}
              checked={visitAtractions === false}/>
            <label className="form-check-label" htmlFor="false">
             No
            </label>
          </div>
        </div>

      </div>

      <div className="mt-5">
        <button className="btn btn-next" onClick={onNext}>Next</button>
      </div>

    </div>
  );
};
