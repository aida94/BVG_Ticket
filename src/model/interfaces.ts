export interface StateRaw {
  duration: number,
  travelMethod: 'bike' | 'other',
  fareZone: 'AB' | 'C',
  berlinPass: boolean,
  visitAtractions: boolean
}

export class State {
  duration: number;
  travelMethod: 'bike' | 'other';
  fareZone: 'AB' | 'C';
  berlinPass: boolean;
  visitAtractions: boolean;

  constructor(data: StateRaw) {
    this.duration = data.duration;
    this.travelMethod = data.travelMethod;
    this.fareZone = data.fareZone;
    this.berlinPass = data.berlinPass;
    this.visitAtractions = data.visitAtractions
  };
}

export interface Ticket {
  name: string;
  discount: boolean;
  time: string;
  price: number;
  info: State;
}
