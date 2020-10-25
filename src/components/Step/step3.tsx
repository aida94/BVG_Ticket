import React, { useState } from 'react';

import { ticketService } from 'service/ticketService';

export const Step3: React.FC<{ history: string[] }> = ({history}) => {

  const [fareZone, setFareZone] = useState<'AB' | 'C'>(ticketService.getState().fareZone);

  const onChange = (value: 'AB' | 'C') =>  {
    setFareZone(value);
  }

  const onPrevious = () =>  {
    history.push("./step2");
  }

  const onNext = () =>  {
    history.push("./step4");
    ticketService.setFareZonefunc(fareZone);
  }

  return (
    <div className="form-group w-75">
      <label className="float-left">3. What zone of Berlin do you want to travel? </label>
      <select
        name="fareZone"
        value={fareZone}
        className="browser-default custom-select"
        onChange={event => onChange(event.target.value as 'AB' | 'C')}
        required>

        <option defaultValue=""> </option>
        <option value="AB">AB</option>
        <option value="C">C</option>
      </select>

      <button className="btn btn-primary" onClick={onPrevious}>Previous</button>
      <button className="btn btn-primary" onClick={onNext}>Next</button>
    </div>
  );
};
