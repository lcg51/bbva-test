import {
  Component
} from '@angular/core';
import {
  Router,
  NavigationEnd,
  NavigationStart
} from '@angular/router';
import {
  filter
} from 'rxjs/operators';
import { PetsService } from './services/Pet/pets.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'fever-pets';

  constructor(
    private router: Router,
    private petsService: PetsService,
  ) {

    router.events
      .pipe(
        filter(
          (event: NavigationEnd) => {
            return (event instanceof NavigationStart);
          }
        )
      )
      .subscribe(
        (event: NavigationStart) => {
          console.log(event)
          this.petsService.historyRoutes.push(event);
          console.groupEnd();

        }
      );
  }

  public goToHome() {
    this.router.navigate(['']);
  }
}
