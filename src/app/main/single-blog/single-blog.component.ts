import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiFunctionsService } from 'src/app/api_Services/api-functions.service';
import { BlogService } from 'src/app/api_Services/blog.service';
import { Blog } from 'src/app/models/blogs';

@Component({
  selector: 'app-single-blog',
  templateUrl: './single-blog.component.html',
  styleUrls: ['./single-blog.component.css']
})
export class SingleBlogComponent {

  id!: any;
  myObject = new Blog;
  constructor(private serv: BlogService, private activeRoute: ActivatedRoute) {
    this.id = this.activeRoute.snapshot.paramMap.get("id");
    serv.getById(this.id).subscribe((data: any) => {
      this.myObject = data;
    });
  }


}
