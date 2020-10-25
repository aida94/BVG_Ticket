import { ticketList } from 'model/ticketList';
import { State } from 'model/interfaces';

export class TicketService {
  private static instance: TicketService ;
  tickets = ticketList;

  static getInstance(): TicketService  {
    if (!TicketService.instance) {
      TicketService.instance = new TicketService ();
    }
    return TicketService.instance;
  }

  state = new State( {
    duration: 1,
    travelMethod: 'bike',
    fareZone: 'AB',
    berlinPass: true,
    visitAtractions: true
  });

  getTickets() {
    return this.tickets.length;
  }

  getState() {
    console.log(this.tickets)
    return this.state;
  }

  setDurationfunc(value: number) {
    this.state.duration = value;
    this.tickets = this.tickets.filter(e => e.info.duration <= value)
  }

  setTravelMethodfunc(value: 'bike' | 'other') {
    this.state.travelMethod = value;
    this.tickets = this.tickets.filter(e => e.info.travelMethod === value)
  }

  setFareZonefunc(value: 'AB' | 'C') {
    this.state.fareZone = value;

    if (this.state.travelMethod === 'bike' ) {
      return;
    }

    if (value === 'AB') {
      this.tickets = this.tickets.filter(e => e.info.fareZone === value)
      return this.tickets;
    }
  }

  setBerlinPassfunc(value: boolean) {
    this.state.berlinPass = value;

    if (this.state.travelMethod === 'bike' ) {
      return;
    }

    if (value === false) {
      this.tickets = this.tickets.filter(e => e.info.berlinPass === value)
      return this.tickets;
    }
  }

  setVisitAtractionsfunc(value: boolean) {
    this.state.visitAtractions = value;

    if (this.state.travelMethod === 'bike' ) {
      return;
    }

    if (value === false) {
      this.tickets = this.tickets.filter(e => e.info.visitAtractions === value)
      return this.tickets;
    }
  }

}

const ticketService = TicketService.getInstance();

export { ticketService };
