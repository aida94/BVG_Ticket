import React, { useState } from 'react';

import { ticketService } from 'service/ticketService';

export const Step5: React.FC<{ history: string[] }> = ({history}) => {

  const [visitAtractions, setvisitAtractions] = useState<boolean>(ticketService.getState().visitAtractions);

  const onChange = (value: string) =>  {
    setvisitAtractions(value === 'true');
  }

  const onPrevious = () =>  {
    history.push("./step4");
  }

  const onNext = () =>  {
    history.push("./result");
    ticketService.setVisitAtractionsfunc(visitAtractions);
  }

  return (
    <div className="form-group w-75">

      <label className="float-left">5. Are you planing to visit Berlin Attractions? </label>
      <select
        name="visitAtractions"
        value={visitAtractions.toString()}
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
