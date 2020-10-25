import React, { useState } from 'react';

import { ticketService } from 'service/ticketService';

export const Step2: React.FC<{ history: string[] }> = ({history}) => {

  const [travelMethod, setTravelMethod] = useState<'bike' | 'other'>(ticketService.getState().travelMethod);

  const onChange = (value: 'bike' | 'other') =>  {
    setTravelMethod(value);
  }

  const onPrevious = () =>  {
    history.push("./");
  }

  const onNext = () =>  {
    history.push("./step3");
    ticketService.setTravelMethodfunc(travelMethod);
  }

  return (
    <div className="form-group w-75">
      <label className="float-left">2. What travel methods do you want to use? </label>
      <select
        name="travelMethod"
        value={travelMethod}
        className="browser-default custom-select"
        onChange={event => onChange(event.target.value as 'bike' | 'other')}
        required>

        <option defaultValue=""> </option>
        <option value="bike">Bike</option>
        <option value="other">Other transports </option>
      </select>

      <button className="btn btn-primary" onClick={onPrevious}>Previous</button>
      <button className="btn btn-primary" onClick={onNext}>Next</button>
    </div>
  );
};
