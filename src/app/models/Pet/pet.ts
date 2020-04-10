import {
  DomSanitizer
} from '@angular/platform-browser';

export interface Deserializable {
  deserialize(input: any): this;
}

export class Pet implements Deserializable {

  private id: number;
  private name: string;
  private kind: string;
  private weight: number;
  private height: number;
  private length: number;
  private photo_url: string;
  private description: string;
  private health: number;
  private number_of_lives?: number;

  constructor(private domSanitizer: DomSanitizer) {

  }

  public deserialize(input: any) {
    Object.assign(this, input);
    this.setHealth();
    return this;
  }

  public getId() {
    return this.id;
  }

  public getPetName() {
    return this.name;
  }

  public getPetKind() {
    return this.kind;
  }

  public getPetWeight() {
    return this.weight;
  }

  public getPetHeight() {
    return this.height;
  }

  public getPetLength() {
    return this.length;
  }

  public getPetPhotoUrl() {
    return this.domSanitizer.bypassSecurityTrustStyle(`url(${this.photo_url})`);
  }

  public getDescription() {
    return this.description;
  }

  public getHealth() {
    return this.health;
  }

  public getHealthName() {
      return (this.health === 0) ? 'Salud mala' : (this.health === 1) ? 'Salud buena' : 'Salud muy buena';
  }

  public getPropertyByString(prop: string) {
    return this[prop];
  }

  private setHealth() {
    const healthRatio = this.weight / (this.height * this.length);
    if (this.number_of_lives === 1) {
        this.health = 0;
    } else {
    this.health = (healthRatio < 2 || healthRatio > 5) ? 0 :
      (healthRatio >= 2 && healthRatio <= 3) ? 2 : 1;
    }
  }

}
