import React, { useState } from 'react';

import { ticketService } from 'service/ticketService';

export const Step1: React.FC<{ history: string[] }> = ({history}) => {

  const [duration, setDurationValue] = useState<number>(ticketService.getQuestions().duration);

  const onChange = (value: number) =>  {
    setDurationValue(value);
  }

  const onNext = () =>  {
    history.push("./step2");
    ticketService.setDuration(duration);
  }

  return (
    <div>
      <h4 className="mb-5">Answer some simple question to get a better ticket suggestion </h4>

      <div className="form-group w-50">
        <label className="float-left">1. How many days will your stay in Berlin? </label>
        <input
          type="number"
          name="duration"
          value={duration}
          className="form-control"
          onChange={event => onChange(parseInt(event.target.value) || duration)}
          min='1'
          required/>
      </div>

      <div className="mt-5">
        <button className="btn btn-next" onClick={onNext}>Next</button>
      </div>

    </div>
  );
};
