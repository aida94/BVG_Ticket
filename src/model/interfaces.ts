export interface QuestionInterface {
  duration: number,
  travelMethod: 'bike' | 'other',
  fareZone: 'AB' | 'C',
  berlinPass: boolean,
  visitAtractions: boolean
}

export class Questions {
  duration: number;
  travelMethod: 'bike' | 'other';
  fareZone: 'AB' | 'C';
  berlinPass: boolean;
  visitAtractions: boolean;

  constructor(data: QuestionInterface) {
    this.duration = data.duration;
    this.travelMethod = data.travelMethod;
    this.fareZone = data.fareZone;
    this.berlinPass = data.berlinPass;
    this.visitAtractions = data.visitAtractions
  };
}

export interface TicketInterface {
  name: string;
  discount: boolean;
  time: string;
  price: number;
  info: string;
  question: Questions;
}
