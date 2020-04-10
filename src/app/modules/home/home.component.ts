import { Component, OnInit } from '@angular/core';
import { PetsService } from 'src/app/services/Pet/pets.service';
import { Pet } from 'src/app/models/Pet/pet';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public pets: Array<Pet> = [];

  constructor(private petsService: PetsService, private domSanitizer: DomSanitizer) { }

  ngOnInit() {
    this.petsService.getPets(1)
    .subscribe((res: Array<any>) => this.pets = res.map((pet: Pet) => new Pet(this.domSanitizer).deserialize(pet)));
  }


  public onScroll(ev: any) {
    console.log(ev);
  }

}
