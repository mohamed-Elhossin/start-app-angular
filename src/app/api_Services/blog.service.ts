import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { ApiFunctionsService } from './api-functions.service';
import { Blog } from '../models/blogs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BlogService extends ApiFunctionsService<Blog> {

  constructor(public override http: HttpClient, protected override Router: Router) {
    super("http://localhost:3000/blogs", http , Router);
  }
}
