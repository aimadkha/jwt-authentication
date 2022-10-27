import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  rootUrl = 'http://localhost:8080';
  requestHeader = new HttpHeaders({ 'No-Auth': 'True' });

  constructor(private http: HttpClient) {}

  public login(loginData: any) {
    return this.http.post(this.rootUrl + '/authenticate', loginData, {
      headers: this.requestHeader,
    });
  }
}
