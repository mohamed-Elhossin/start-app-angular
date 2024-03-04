import { Injectable } from '@angular/core';
import { ApiFunctionsService } from './api-functions.service';
import { Services } from '../models/services';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ServicesService extends ApiFunctionsService<Services>{

  constructor(public override http: HttpClient, protected override Router: Router) {
    super("http://localhost:3000/services", http, Router);
  }
}
