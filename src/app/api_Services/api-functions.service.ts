import { Inject, Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ApiFunctionsService<type> {

  constructor(@Inject(String) public Base_URL: string, protected http: HttpClient
, protected Router:Router
  ) {
  }
  // Read Data from APi
  get(): Observable<type> {
    return this.http.get<type>(this.Base_URL);
  }
  // Get By id
  getById(id: any): Observable<type> {
    return this.http.get<type>(this.Base_URL + `/${id}`);
  }
  // Create Data from APi
  post(object: any): Observable<type> {
    return this.http.post<type>(this.Base_URL, object);
  }

  // Update Data
  put(object: type, id: any): Observable<type> {
    return this.http.put<type>(this.Base_URL + `/${id}`, object);
  }

  // Delete Object From Api by ID
  delete(id: any): Observable<type> {
    return this.http.delete<type>(this.Base_URL + `/${id}`);
  }

  auth() {
    if (localStorage.getItem('admin')) {

    } else {
      this.Router.navigateByUrl("/login");
    }
  }

}
