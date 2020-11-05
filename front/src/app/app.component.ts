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

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'BBVA test';

  constructor() {}

}
