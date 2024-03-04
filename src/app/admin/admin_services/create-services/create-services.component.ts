import { Services } from './../../../models/services';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ServicesService } from 'src/app/api_Services/services.service';

import { CustomValidators } from 'ng2-validation';
@Component({
  selector: 'app-create-services',
  templateUrl: './create-services.component.html',
  styleUrls: ['./create-services.component.css', '../../admin_style.css']
})
export class CreateServicesComponent {

  message = "";


  myServices = new Services();

  ServicesForm = new FormGroup({
    title: new FormControl("", [Validators.required, Validators.minLength(3)]),
    description: new FormControl("", [Validators.required, Validators.minLength(3)]),
    icon: new FormControl("", [Validators.required, Validators.minLength(3), CustomValidators.email])
  });



  constructor(private serv: ServicesService) {
    // this.myServices = this.ServicesForm.value;
    this.serv.auth();
  }



  get ServicesFormGet() {
    return this.ServicesForm;
  }

  get title() {
    return this.ServicesForm.get("title");
  }
  get description() {
    return this.ServicesForm.get("description");
  }
  get icon() {
    return this.ServicesForm.get("icon");
  }


  print(ServicesFormGet: any) {
    console.log(ServicesFormGet);

  }
  create() {

    this.serv.post(this.ServicesForm.value).subscribe(data => {
      console.log("hello");

    })
  }
}
