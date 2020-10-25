import React, { useState } from 'react';

import { ticketService } from 'service/ticketService';

export const Step3: React.FC<{ history: string[] }> = ({history}) => {

  const [fareZone, setFareZone] = useState<'AB' | 'C'>(ticketService.getState().fareZone);

  const onChange = (value: 'AB' | 'C') =>  {
    setFareZone(value);
  }

  const onNext = () =>  {
    history.push("./step4");
    ticketService.setFareZonefunc(fareZone);
  }

  return (
    <div>
      <h4 className="mb-5">Answer some simple question to get a better ticket suggestion </h4>

      <div className="form-group w-75">
        <label className="float-left">3. What zone of Berlin do you want to travel? </label>

        <div className="row">
          <div className="col form-check">
            <input
              className="form-check-input"
              type="radio"
              name="fareZone"
              id="AB"
              value="AB"
              onChange={() => onChange('AB')}
              checked={fareZone === 'AB'}/>
            <label className="form-check-label" htmlFor="AB">
              AB
              <span className="text-muted">(Berlin city area)</span>
            </label>
          </div>
          <div className="col form-check">
            <input
              className="form-check-input"
              type="radio"
              name="fareZone"
              id="C"
              value="C"
              onChange={() => onChange('C')}
              checked={fareZone === 'C'}/>
            <label className="form-check-label" htmlFor="C">
              C
            </label>
            <span className="text-muted">(Traffic zone A or C. Only valid together with a main ticket.)</span>
          </div>
        </div>

      </div>

      <div className="mt-5">
        <button className="btn btn-next" onClick={onNext}>Next</button>
      </div>

    </div>
  );
};
