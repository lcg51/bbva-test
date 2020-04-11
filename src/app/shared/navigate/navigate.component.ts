import { Component, OnInit } from '@angular/core';
import { PetsService } from 'src/app/services/Pet/pets.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-navigate',
  templateUrl: './navigate.component.html',
  styleUrls: ['./navigate.component.scss']
})
export class NavigateComponent implements OnInit {

  constructor(
    private petsService: PetsService,
    private location: Location,
  ) { }

  ngOnInit() {}

  public goBack() {
    this.location.back();
  }

  public goForward() {
    this.location.forward();
  }

}
