import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {
  users: any = []
  constructor() { }

  signup(user: any) {
    this.users.push(user);
    return user
  }
}
