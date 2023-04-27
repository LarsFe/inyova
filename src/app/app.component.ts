import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  /*
    Toggle footer on base of route.

    NavigationEnd: An event triggered when a navigation ends successfully.
    
    - subscribe to router events
    - check subscribed val is an instance of Navigation End
    - use value.url to find the url where user has navigated currently
  */
  showFooter: boolean = true;

  constructor(private router: Router) {
    this.router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        this.showFooter = (val.url != '/next-steps');
      }
    });
  }
}
