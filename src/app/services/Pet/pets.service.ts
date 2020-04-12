import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pet } from '../../models/Pet/pet';
import { Observable } from 'rxjs';
import { NavigationStart } from '@angular/router';
import { SortPetsI } from 'src/app/interfaces/sort-pets-i';

@Injectable({
  providedIn: 'root'
})
export class PetsService {

  private baseUrl = 'https://my-json-server.typicode.com/Feverup/';
  private URLGetPets = `${this.baseUrl}fever_pets_data/pets/`;
  private getPetsPaged = '?_page=:page_id';
  private URLGetPetByID = `${this.baseUrl}fever_pets_data/pets/:pet_id`;
  public Pets: Array<any>;
  public Pet: Pet;
  public historyRoutes: Array<NavigationStart> = [];
  public filterConfig: SortPetsI;

  constructor(
    private http: HttpClient
  ) { }

  public getPets(pageId: number): Observable<any> {
    const urlParsed = (pageId !== -1) ? (this.URLGetPets + this.getPetsPaged).replace(':page_id', pageId.toString())
    : this.URLGetPets;
    return this.http.get(urlParsed);

  }

  public getPetById(id: number): Observable<any> {
    const urlParsed = this.URLGetPetByID.replace(':pet_id', id.toString());
    return this.http.get(urlParsed);
  }


  public getLastRoute(): NavigationStart {
    const last = this.historyRoutes.length - 1;
    return this.historyRoutes[last];
  }
}
