import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiFunctionsService } from 'src/app/api_Services/api-functions.service';
import { BlogService } from 'src/app/api_Services/blog.service';
import { Blog } from 'src/app/models/blogs';

@Component({
  selector: 'app-admin-single-blog',
  templateUrl: './admin-single-blog.component.html',
  styleUrls: ['./admin-single-blog.component.css']
})
export class AdminSingleBlogComponent {
  message = "";
  id!: any;
  myObject = new Blog;
  showData() {
    this.id = this.activeRoute.snapshot.paramMap.get("id");
    this.serv.getById(this.id).subscribe((data: any) => {
      this.myObject = data;
    });
  }
  constructor(private router: Router, private serv: BlogService, private activeRoute: ActivatedRoute) {
    this.showData();
  }

  remove(id: any) {
    this.serv.delete(id).subscribe(data => {
      this.message = " Delete Object Number " + id;
      setTimeout(() => {
        this.router.navigateByUrl("/list_blog");
      }, 1000);
      this.showData()
    })
  }
}
