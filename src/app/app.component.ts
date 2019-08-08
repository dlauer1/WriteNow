import { Component } from "@angular/core";
import { Router } from '@angular/router';

@Component({
  selector: "app-root",
  template: `
    <nav class="fixed-top container-fluid">
      <div class="row nav-writenow">
        <div class="col-1">
          <img class="logo" src="assets/images/Logo2.png" alt="logo" />
        </div>
        <div class="col-3 title_text">
          {{ title }}
        </div>
        <div class="col-8 pill_container">
          <ul class="pill_links">
            <li>
              <a
                class="nav-link"
                style="background-color: #333333;"
                routerLinkActive="active"
                [routerLink]="['/home']"
                >Home</a
              >
            </li>
            <li>
              <a class="nav-link disabled">Services</a>
            </li>
            <li>
              <a
                class="nav-link"
                routerLinkActive="active"
                [routerLink]="['/testimonials']"
                >Video Testimonials</a
              >
            </li>
            <li>
              <a class="nav-link disabled">Company</a>
            </li>
            <li>
              <a class="nav-link disabled">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <footer class="footer">
      <div class="container">
      <div *ngIf="router.url != '/testimonials'" class='vid-test'>
        <a
          class="test-link"
          routerLinkActive="active"
          [routerLink]="['/testimonials']"
          >Video Testimonials
        </a>
        </div>
      </div>
    </footer>
    <router-outlet></router-outlet>
  `,
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "Write Now!";
  constructor(public router: Router) { }

  ngOnInit() {
    console.log(this.router)
  }

}

