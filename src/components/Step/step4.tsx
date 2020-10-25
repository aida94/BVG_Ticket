import React, { useState } from 'react';

import { ticketService } from 'service/ticketService';

export const Step4: React.FC<{ history: string[] }> = ({history}) => {

  const [berlinPass, setBerlinPass] = useState<boolean>(ticketService.getState().berlinPass);

  const onChange = (value: string) =>  {
    setBerlinPass(value === 'true');
  }

  const onPrevious = () =>  {
    history.push("./step3");
  }

  const onNext = () =>  {
    history.push("./step5");
    ticketService.setBerlinPassfunc(berlinPass);
  }

  return (
    <div className="form-group w-75">
      <label className="float-left">4. Do you have Berlin Pass? </label>
      <select
        name="berlinPass"
        value={berlinPass.toString()}
        className="browser-default custom-select"
        onChange={event => onChange(event.target.value)}
        required>

        <option defaultValue=""> </option>
        <option value="true">Yes</option>
        <option value="false">No</option>
      </select>

      <button className="btn btn-primary" onClick={onPrevious}>Previous</button>
      <button className="btn btn-primary" onClick={onNext}>Next</button>
    </div>
  );
};
