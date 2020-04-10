import { Component, OnInit } from '@angular/core';
import { PetsService } from 'src/app/services/Pet/pets.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private petsService: PetsService) { }

  ngOnInit() {
    this.petsService.getPets(1);
    this.petsService.getPetById(1);
  }

}
