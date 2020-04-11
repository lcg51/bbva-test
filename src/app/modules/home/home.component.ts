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
import { sortPetValues } from 'src/app/config/vars';


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

  constructor(
    private petsService: PetsService,
    private domSanitizer: DomSanitizer,
    private router: Router,
  ) {}

  ngOnInit() {
    this.getPets();
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

  public closeModal() {
    this.showModal = false;
  }

}
