import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserAuthService {
  constructor() {}

  public setRoles(roles: []) {
    localStorage.setItem('roles', JSON.stringify(roles));
  }

  public getRoles() {
    const item = localStorage.getItem('roles');

    return item ? JSON.parse(item) : [];
  }

  public setToken(jwtToken: string) {
    localStorage.setItem('jwtToken', jwtToken);
  }

  public getToken(): string {
    const item = localStorage.getItem('jwtToken');
    return item ? item : '';
  }

  public clear() {
    localStorage.clear();
  }

  public isLoggedIn() {
    return this.getRoles() && this.getToken();
  }
}
