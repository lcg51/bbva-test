import {
  DomSanitizer
} from '@angular/platform-browser';

export interface Deserializable {
  deserialize(input: any): this;
}

export class User implements Deserializable {

  private id: number;
  private name: string;
  private surname: string;
  private lastAccess: string;

  constructor(
      private domSanitizer?: DomSanitizer
    ) {

  }

  public deserialize(input: any) {
    Object.assign(this, input);
    return this;
  }

  public getId() {
    return this.id;
  }

  public getPetName() {
    return this.name;
  }

}
