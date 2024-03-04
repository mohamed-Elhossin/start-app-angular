import { Component } from '@angular/core';
import { ApiFunctionsService } from 'src/app/api_Services/api-functions.service';
import { BlogService } from 'src/app/api_Services/blog.service';
import { Blog } from 'src/app/models/blogs';

@Component({
  selector: 'app-list-blog',
  templateUrl: './list-blog.component.html',
  styleUrls: ['./list-blog.component.css', '../../admin_style.css']
})
export class ListBlogComponent {

  message = "";

  allData!: Blog[];
  showData() {
    this.serv.get().subscribe((data: any) => {
      this.allData = data;
    })
  }
  constructor(private serv: BlogService) {
    this.showData();
  }


}
