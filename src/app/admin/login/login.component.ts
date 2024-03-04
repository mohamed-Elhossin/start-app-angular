import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/api_Services/admin.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css', '../admin_style.css']
})
export class LoginComponent {
  message = "";
  userName!: string;
  userPass!: string;

  constructor(private serv: AdminService, private router: Router) {

  }

  login() {
    this.serv.get().subscribe((data: any) => {
      let user = data.find((userData: any) => {
        return userData.name == this.userName && userData.password == this.userPass
      })

      if (user) {
        this.router.navigateByUrl('/admin');
        localStorage.setItem("admin", user);
      } else {
        this.message = " Please Try Agien ";
      }
    });
  }
}
