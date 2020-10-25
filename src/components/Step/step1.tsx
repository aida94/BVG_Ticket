import React, { useState } from 'react';

import { ticketService } from 'service/ticketService';

export const Step1: React.FC<{ history: string[] }> = ({history}) => {

  const [duration, setDuration] = useState<number>(ticketService.getState().duration);

  const onChange = (value: number) =>  {
    setDuration(value);
  }

  const onNext = () =>  {
    history.push("./step2");
    ticketService.setDurationfunc(duration);
  }

  return (
    <div className="form-group w-75">
      <label className="float-left">1. How much day will last your travel? </label>

      <input
        type="number"
        name="duration"
        value={duration}
        className="form-control"
        onChange={event => onChange(parseInt(event.target.value) || duration)}
        min='1'
        required/>

      <button className="btn btn-primary" onClick={onNext} disabled={!!!duration}>Next</button>

    </div>
  );
};
