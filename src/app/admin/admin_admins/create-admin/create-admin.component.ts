import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/api_Services/admin.service';
import { Admin } from 'src/app/models/admin';

@Component({
  selector: 'app-create-admin',
  templateUrl: './create-admin.component.html',
  styleUrls: ['./create-admin.component.css', '../../admin_style.css']
})
export class CreateAdminComponent {
  message = "";

  admin = new Admin();
  constructor(private serv: AdminService, private router: Router) {
    this.serv.auth();
  }

  create() {
    this.serv.post(this.admin).subscribe(data => {
      this.message = "Create User Successfully";
      this.admin.name = "";
      this.admin.password = "";
      setTimeout(() => {
        this.message = "";
        this.router.navigateByUrl("/admin");
      }, 500);
    });
  }

}
