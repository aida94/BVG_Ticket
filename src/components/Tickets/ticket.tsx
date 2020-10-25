import React from 'react';

export const Ticket: React.FC<any> = ({data}) => {

  return (
    <div className="col-3 mb-4">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{data.name}</h5>
          <h6 className="card-subtitle mb-2 ">{data.time} / {data.price} €</h6>
          <p className="card-text">Info:
          Travel Method {data.info.travelMethod}
          Fare Zone: {data.info.fareZone}
          {data.info.berlinPass && 'Berlin Pass'}
          {data.info.visitAtractions && 'Discount for partners'}
          </p>
        </div>
      </div>
    </div>
  );
};
