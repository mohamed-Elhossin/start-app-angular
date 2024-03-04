import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiFunctionsService } from 'src/app/api_Services/api-functions.service';
import { BlogService } from 'src/app/api_Services/blog.service';
import { Blog } from 'src/app/models/blogs';

@Component({
  selector: 'app-create-blog',
  templateUrl: './create-blog.component.html',
  styleUrls: ['./create-blog.component.css', '../../admin_style.css']
})
export class CreateBlogComponent {

  message = "";

  blog = new Blog();

  constructor(private serv: BlogService, private route: Router) {

  }

  create() {
    this.serv.post(this.blog).subscribe(data => {
      this.route.navigateByUrl("list_blog");

    })
  }

  print(myForm: any) {
    console.log(myForm);

  }
}
