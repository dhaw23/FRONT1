import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http : HttpClient) { }
  registerUser(user:any){
    return this.http.post(`${environment.apiURL}/auth/register`,user)
  }
}
