import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pet } from '../../models/Pet/pet';

@Injectable({
  providedIn: 'root'
})
export class PetsService {

  private baseUrl = 'https://my-json-server.typicode.com/Feverup/';
  private URLGetPets = `${this.baseUrl}fever_pets_data/pets/?_page=:page_id`;
  private URLGetPetByID = `${this.baseUrl}fever_pets_data/pets/:pet_id`;
  public Pets: Array<any>;
  public Pet: Pet;

  constructor(private http: HttpClient) { }

  public getPets(pageId: number) {
    const urlParsed = this.URLGetPets.replace(':page_id', pageId.toString());
    return this.http.get(urlParsed)
    .subscribe((res: Array<any>) => this.Pets = res.map((pet: Pet) => new Pet().deserialize(pet)));

  }

  public getPetById(id: number) {
    const urlParsed = this.URLGetPetByID.replace(':pet_id', id.toString());
    return this.http.get(urlParsed)
    .subscribe((res: any) => this.Pet = new Pet().deserialize(res));
  }
}
