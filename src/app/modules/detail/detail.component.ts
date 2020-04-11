import { Component, OnInit } from '@angular/core';
import { PetsService } from 'src/app/services/Pet/pets.service';
import { Pet } from 'src/app/models/Pet/pet';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  public pet: Pet;
  public id: number;

  constructor(
    private petsService: PetsService,
    private route: ActivatedRoute,
    private domSanitizer: DomSanitizer,
  ) {
    this.route.params.subscribe((params: any) => {
      this.id = parseInt(params.id, 10);
    });
  }

  ngOnInit() {
    this.petsService.getPetById(this.id)
    .subscribe(data => this.pet = new Pet(this.domSanitizer).deserialize(data));
  }

}
