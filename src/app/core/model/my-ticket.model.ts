export class MyTicket {
  ticketId: number;
  eventDateTime: Date;
  eventName: string;
  venueName: string;
  imageUrl: string;

  constructor(ticketId: number, eventDateTime: Date, eventName: string, venueName: string, imageUrl: string) {
    this.ticketId = ticketId;
    this.eventDateTime = eventDateTime;
    this.eventName = eventName;
    this.venueName = venueName;
    this.imageUrl = imageUrl;
  }
}
