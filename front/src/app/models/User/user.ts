import * as moment from 'moment';

export interface Deserializable {
  deserialize(input: any): this;
}

export class User implements Deserializable {

  private id: number;
  private name: string;
  private mail: string;
  private surname: string;
  private lastAccess;

  constructor() {}

  public deserialize(input: any) {
    Object.assign(this, input);
    this.lastAccess = moment(this.lastAccess);
    console.log(this.lastAccess.format('DD/MM/YYYY HH:mm:ss'));
    console.log(moment().format('DD/MM/YYYY HH:mm:ss'));
    return this;
  }

  public getId() {
    return this.id;
  }

  public getCompleteName() {
    return `${this.name} ${this.surname}`;
  }

  public getDays(): string {
    let days: any = moment().diff(this.lastAccess, 'days');
    days = (days < 10) ? '0' + days : days;
    return days;
  }

  public getHours(): string {
    let hours: any = moment().diff(this.lastAccess, 'hours');
    hours = (hours < 10) ? '0' + hours : hours;
    return hours;
  }

  public getMinutes(): string {
    let minutes: any = moment().diff(this.lastAccess, 'minutes');
    minutes = minutes % 60;
    minutes = (minutes < 10) ? '0' + minutes : minutes;
    return minutes;
  }

  public getSeconds(): string {
    let seconds: any = moment().diff(this.lastAccess, 'seconds');
    seconds = seconds % 60;
    seconds = (seconds < 10) ? '0' + seconds : seconds;
    return seconds;
  }

}
