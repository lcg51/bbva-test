import {
  Component,
  OnInit
} from '@angular/core';
import {
  PetsService
} from 'src/app/services/Pet/pets.service';
import {
  Pet
} from 'src/app/models/Pet/pet';
import {
  DomSanitizer
} from '@angular/platform-browser';
import {
  Router
} from '@angular/router';

import { SortPetsI } from 'src/app/interfaces/sort-pets-i';
import { sortPetValues, maxIdPetValue, minIdPetValue } from 'src/app/config/vars';
import { StorageService } from 'src/app/services/Storage/storage.service';
import * as moment from 'moment';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public pets: Array < Pet > = [];
  public page = 1;
  public sortItems: Array<SortPetsI> = sortPetValues;
  public showModal = false;
  public dayPet: Pet;

  constructor(
    private petsService: PetsService,
    private domSanitizer: DomSanitizer,
    private router: Router,
    private storageService: StorageService,
  ) {}

  ngOnInit() {
    this.getPets();
    const storageItem = this.storageService.getStorage('daysPet');
    const today = moment().format('DD/MM/YYYY');
    if (storageItem === null || storageItem[today] === null) {
      const randomId = this.getRandomId();
      this.getDayPet(randomId);
    } else {
      this.dayPet = new Pet(this.domSanitizer).deserialize(storageItem[today]);
    }
  }

  public getSortItem(sortValues: SortPetsI) {
    this.petsService.filterConfig = sortValues;
    this.sortPets();
  }

  public onScroll(ev: any) {
    this.page += 1;
    this.getPets();
  }

  public getPets() {
    this.petsService.getPets(this.page)
      .subscribe((res: Array < any > ) => this.addPets(res));
  }

  public addPets(data) {
    this.pets = [...this.pets, ...data.map((pet: Pet) => new Pet(this.domSanitizer).deserialize(pet))];
    if (this.petsService.filterConfig != null) {
      this.sortPets();
    }
  }

  public sortPets() {
    this.pets.sort(this.compare(this.petsService.filterConfig.realName));
  }

  private compare(property: string) {
    return (a: Pet, b: Pet) => {
      const bandA = a.getPropertyByString(property);
      const bandB = b.getPropertyByString(property);
      return (bandA > bandB) ? 1 : -1;
    };
  }

  public goToPet(id: number) {
    this.router.navigate(['pets', id]);
  }

  public getPetOfTheDay() {
    this.showModal = true;
  }

  public getDayPet(randomId) {
    this.petsService.getPetById(randomId).subscribe(data => {
      const today = moment().format('DD/MM/YYYY');
      const jsonPets = this.storageService.getStorage('daysPet') || {};
      jsonPets[today] = data;
      this.storageService.setStorage('daysPet', jsonPets);
      this.dayPet = new Pet(this.domSanitizer).deserialize(data);
    });
  }

  public closeModal() {
    this.showModal = false;
  }

  public getRandomId() {
    return Math.floor(Math.random() * (maxIdPetValue - minIdPetValue)) + 1;
  }

}
