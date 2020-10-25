import React from 'react';

export const Ticket: React.FC<any> = ({data}) => {

  return (
    <div className="col-3 mb-4">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{data.name}</h5>
          <h6 className="card-subtitle text-muted mb-2 ">{data.time} / {data.price} €</h6>
          <hr/>
          <p className="card-text text-left"> {data.info}
          </p>
        </div>
      </div>
    </div>
  );
};
