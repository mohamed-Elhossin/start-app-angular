import { Injectable } from '@angular/core';
import { ApiFunctionsService } from './api-functions.service';
import { HttpClient } from '@angular/common/http';
import { Admin } from '../models/admin';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AdminService extends ApiFunctionsService<Admin> {

  constructor(public override http: HttpClient , protected override Router: Router) {
    super("http://localhost:3000/admin", http ,Router);
  }
}
