export class Ticket {
  id: number;

  // FIXME below shouldn't be optional
  //  for dummy data
  seatNumber?: number;
  venue: string;

  // FIXME below are strings for dummy data
  //  may have to change to proper types when linked to backend
  event: string;
  datetime: string;
}
