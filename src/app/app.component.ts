import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  template: `
    <nav class="navbar navbar-expand" style="background-color: #333333;">
      <img
        src="assets/images/Logo2.png"
        height="90"
        weight="90"
        class="d-inline-block"
        alt="logo"
      />
      <a class="navbar-brand">WRITE NOW!</a>
      <ul class="nav nav-pills">
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
    </nav>
    <div class="body-container">
      <router-outlet></router-outlet>
      <footer class="page-footer font-small blue">
        <div
          class="footer-testimonial text-center"
          style=" padding-top:8px; background-color: #333333; height:55px"
        >
          <button type="button" class="btn btn-primary">Testimonials</button>
        </div>
      </footer>
    </div>
  `,
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "Write Now!";
}