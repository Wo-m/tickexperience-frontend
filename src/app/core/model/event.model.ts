export class Event {
  id: number;
  name: string;
  gender: string;
  startTime: Date;
  venue: {id: number, name: string}
  imageURL: string;
}
