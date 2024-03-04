import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent {

  constructor(private Router: Router) {

    if (localStorage.getItem('admin')) {

    } else {
      this.Router.navigateByUrl("/login");
    }

  }
}
