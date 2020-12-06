import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthHelperService {
  constructor() { }


  get getAuthToken() {
    return localStorage.getItem('elat');
  }

  set setAuthToken(token) {
    localStorage.setItem('elat', token);
  }

  removeAuthToken() {
    localStorage.removeItem('elat');
  }

}
