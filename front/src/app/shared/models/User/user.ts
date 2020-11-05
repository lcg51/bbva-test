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

  /**
   * Method to map an object to a User class.
   *
   *
   * @param input - The object data of the user
   * @returns The User class`
   */
  public deserialize(input: object) {
    Object.assign(this, input);
    this.lastAccess = moment(this.lastAccess);
    return this;
  }

  /**
   * Method that returns the id of the user.
   *
   *
   * @param user - The data of the user(User) logged
   * @returns a string with the id`
   */
  public getId() {
    return this.id;
  }

  /**
   * Method that returns the name and surname of the user.
   *
   *
   * @returns a string with the complete name`
   */
  public getCompleteName(): string {
    return `${this.name} ${this.surname}`;
  }

  /**
   * Method that returns the days from the last access.
   *
   *
   * @returns A string with the days`
   */
  public getDays(): string {
    const days: number = moment().diff(this.lastAccess, 'days');
    return (days < 10) ? '0' + days : days.toString();
  }

  /**
   * Method that returns the hours from the last access.
   *
   *
   * @returns A string with the hours`
   */
  public getHours(): string {
    const hours: number = moment().diff(this.lastAccess, 'hours');
    return (hours < 10) ? '0' + hours : hours.toString();
  }

  /**
   * Method that returns the minutes from the last access.
   *
   *
   * @returns A string with the minutes`
   */
  public getMinutes(): string {
    let minutes: number = moment().diff(this.lastAccess, 'minutes');
    minutes = minutes % 60;
    return (minutes < 10) ? '0' + minutes : minutes.toString();
  }

  /**
   * Method that returns the seconds from the last access.
   *
   *
   * @returns A string with the seconds`
   */
  public getSeconds(): string {
    let seconds: number = moment().diff(this.lastAccess, 'seconds');
    seconds = seconds % 60;
    return (seconds < 10) ? '0' + seconds : seconds.toString();
  }

}
