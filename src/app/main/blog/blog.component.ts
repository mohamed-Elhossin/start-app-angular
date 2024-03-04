import { Blog } from 'src/app/models/blogs';
import { ApiFunctionsService } from './../../api_Services/api-functions.service';
import { Component } from '@angular/core';
import { BlogService } from 'src/app/api_Services/blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})

export class BlogComponent {

  allData!: Blog[];
  constructor(private serv: BlogService) {
    this.serv.get().subscribe((data: any) => {
      this.allData = data;
    })
  }

}
