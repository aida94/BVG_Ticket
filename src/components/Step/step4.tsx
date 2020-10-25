import React, { useState } from 'react';

import { ticketService } from 'service/ticketService';

export const Step4: React.FC<{ history: string[] }> = ({history}) => {

  const [berlinPass, setBerlinPassValue] = useState<boolean>(ticketService.getQuestions().berlinPass);

  const onChange = (value: boolean) =>  {
    setBerlinPassValue(value);
  }

  const onNext = () =>  {
    history.push("./step5");
    ticketService.setBerlinPass(berlinPass);
  }

  return (
    <div>
      <h4 className="mb-5">Answer some simple question to get a better ticket suggestion </h4>

      <div className="form-group w-75">
        <label className="float-left">4. Do you have Berlin Pass? </label>

        <div className="row">
          <div className="col form-check">
            <input
              className="form-check-input"
              type="radio"
              name="berlinPass"
              id="true"
              value="true"
              onChange={() => onChange(true)}
              checked={berlinPass === true}/>
            <label className="form-check-label" htmlFor="true">
              Yes
            </label>
            <span className="text-muted">(Personal ticket for holders of the Berlinpass)</span>
          </div>
          <div className="col form-check">
            <input
              className="form-check-input"
              type="radio"
              name="berlinPass"
              id="false"
              value="false"
              onChange={() => onChange(false)}
              checked={berlinPass === false}/>
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
