import { ticketList } from 'model/ticketList';
import { Questions } from 'model/interfaces';


export class TicketService {
  private static instance: TicketService ;
  tickets = ticketList;

  static getInstance(): TicketService  {
    if (!TicketService.instance) {
      TicketService.instance = new TicketService ();
    }
    return TicketService.instance;
  }

  questions = new Questions( {
    duration: 1,
    travelMethod: 'other',
    fareZone: 'AB',
    berlinPass: false,
    visitAtractions: false
  });

  getNormalTickets() {
    const normalTickets = this.tickets.filter(data => data.discount === false)
    return normalTickets;
  }

  getTouristTickets() {
    const touristTickets = this.tickets.filter(data => data.discount === true)
    return touristTickets;
  }

  getQuestions() {
    return this.questions;
  }

  resetTickets() {
    this.tickets = ticketList;
  }

  setDuration(value: number) {
    this.questions.duration = value;
    this.tickets = this.tickets.filter(data => data.question.duration <= value)
  }

  setTravelMethod(value: 'bike' | 'other') {
    this.questions.travelMethod = value;
    this.tickets = this.tickets.filter(data => data.question.travelMethod === value)
  }

  setFareZone(value: 'AB' | 'C') {
    this.questions.fareZone = value;

    if (this.questions.travelMethod === 'bike' ) {
      return;
    }

    if (value === 'AB') {
      this.tickets = this.tickets.filter(data => data.question.fareZone === value)
      return this.tickets;
    }
  }

  setBerlinPass(value: boolean) {
    this.questions.berlinPass = value;

    if (this.questions.travelMethod === 'bike' ) {
      return;
    }

    if (value === false) {
      this.tickets = this.tickets.filter(data => data.question.berlinPass === value)
      return this.tickets;
    }
  }

  setVisitAtractions(value: boolean) {
    this.questions.visitAtractions = value;

    if (this.questions.travelMethod === 'bike' ) {
      return;
    }

    if (value === false) {
      this.tickets = this.tickets.filter(data => data.question.visitAtractions === value)
      return this.tickets;
    }
  }

}

const ticketService = TicketService.getInstance();

export { ticketService };
