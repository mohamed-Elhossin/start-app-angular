import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-nav-bar',
  templateUrl: './admin-nav-bar.component.html',
  styleUrls: ['./admin-nav-bar.component.css']
})
export class AdminNavBarComponent {


  login = true;
  constructor(private router: Router) {
    if (localStorage.getItem("admin")) {
      this.login = true;
    } else {
      this.login = false;
    }
  }


  logout() {
    localStorage.removeItem("admin");
    this.router.navigateByUrl("/login");
  }
}
