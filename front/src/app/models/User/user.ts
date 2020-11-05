import * as moment from 'moment';

export interface Deserializable {
  deserialize(input: object): this;
}

export class User implements Deserializable {

  private id: number;
  private name: string;
  private mail: string;
  private surname: string;
  private lastAccess;

  constructor() {}

  public deserialize(input: object) {
    Object.assign(this, input);
    this.lastAccess = moment(this.lastAccess);
    return this;
  }

  public getId() {
    return this.id;
  }

  public getCompleteName() {
    return `${this.name} ${this.surname}`;
  }

  public getDays(): string {
    const days: number = moment().diff(this.lastAccess, 'days');
    return (days < 10) ? '0' + days : days.toString();
  }

  public getHours(): string {
    const hours: number = moment().diff(this.lastAccess, 'hours');
    return (hours < 10) ? '0' + hours : hours.toString();
  }

  public getMinutes(): string {
    let minutes: number = moment().diff(this.lastAccess, 'minutes');
    minutes = minutes % 60;
    return (minutes < 10) ? '0' + minutes : minutes.toString();
  }

  public getSeconds(): string {
    let seconds: number = moment().diff(this.lastAccess, 'seconds');
    seconds = seconds % 60;
    return (seconds < 10) ? '0' + seconds : seconds.toString();
  }

}
