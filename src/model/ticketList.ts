import { Ticket } from "model/interfaces";

export const ticketList: Ticket[]  = [
  {
    name: 'Single trip ticket',
    discount: false,
    time: '2 hour',
    price: 2.90,
    info: {
      berlinPass: false,
      travelMethod: 'other',
      fareZone: 'AB',
      duration: 0.2,
      visitAtractions: false
    }
  },
  {
    name: 'Single Extension ticket',
    discount: false,
    time: '2 hour',
    price: 1.70,
    info: {
      berlinPass: false,
      travelMethod: 'other',
      fareZone: 'C',
      duration: 0.2,
      visitAtractions: false
    }
  },
  {
    name: 'Day ticket',
    discount: false,
    time: '24 hour',
    price: 8.60,
    info: {
      berlinPass: false,
      travelMethod: 'other',
      fareZone: 'AB',
      duration: 1,
      visitAtractions: false
    }
  },
  {
    name: 'Day Extension ticket',
    discount: false,
    time: '24 hour',
    price: 3.50,
    info: {
      berlinPass: false,
      travelMethod: 'other',
      fareZone: 'C',
      duration: 1,
      visitAtractions: false
    }
  },
  {
    name: 'CityTourCard ticket',
    discount: true,
    time: '48 hour',
    price: 19.90,
    info: {
      berlinPass: false,
      travelMethod: 'other',
      fareZone: 'AB',
      duration: 2,
      visitAtractions: true
    }
  },
  {
    name: 'EasyCityPass ticket',
    discount: true,
    time: '48 hour',
    price: 21.90,
    info: {
      berlinPass: false,
      travelMethod: 'other',
      fareZone: 'AB',
      duration: 2,
      visitAtractions: true
    }
  },
  {
    name: 'QueerCityPass ticket',
    discount: true,
    time: '48 hour',
    price: 21.90,
    info: {
      berlinPass: false,
      travelMethod: 'other',
      fareZone: 'AB',
      duration: 2,
      visitAtractions: true
    }
  },
  {
    name: 'WelcomeCard',
    discount: true,
    time: '48 hour',
    price: 23.00,
    info: {
      berlinPass: false,
      travelMethod: 'other',
      fareZone: 'AB',
      duration: 2,
      visitAtractions: true
    }
  },
  {
    name: 'WelcomCard Museum Island',
    discount: true,
    time: '72 hour',
    price: 51.00,
    info: {
      berlinPass: false,
      travelMethod: 'other',
      fareZone: 'AB',
      duration: 3,
      visitAtractions: true
    }
  },
  {
    name: '7 day ticket',
    discount: false,
    time: '7 days',
    price: 34.00,
    info: {
      berlinPass: false,
      travelMethod: 'other',
      fareZone: 'AB',
      duration: 7,
      visitAtractions: false
    }
  },
  {
    name: 'Monthly ticket',
    discount: false,
    time: '1 month',
    price: 84.00,
    info: {
      berlinPass: false,
      travelMethod: 'other',
      fareZone: 'AB',
      duration: 31,
      visitAtractions: false
    }
  },
  {
    name: 'Berlin-Ticket S',
    discount: false,
    time: '1 month',
    price: 27.50,
    info: {
      berlinPass: true,
      travelMethod: 'other',
      fareZone: 'AB',
      duration: 31,
      visitAtractions: false
    }
  },
  {
    name: 'Bike single trip ticket',
    discount: false,
    time: '2 hour',
    price: 2.00,
    info: {
      berlinPass: false,
      travelMethod: 'bike',
      fareZone: 'AB',
      duration: 0.2,
      visitAtractions: false
    }
  },
  {
    name: 'Bike day ticket',
    discount: false,
    time: '24 hour',
    price: 4.90,
    info: {
      berlinPass: false,
      travelMethod: 'bike',
      fareZone: 'AB',
      duration: 1,
      visitAtractions: false
    }
  },
  {
    name: 'Bike Monthly ticket',
    discount: false,
    time: '1 month',
    price: 10.50,
    info: {
      berlinPass: false,
      travelMethod: 'bike',
      fareZone: 'AB',
      duration: 31,
      visitAtractions: false
    }
  }
]
