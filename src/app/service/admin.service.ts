import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Professor } from '../model/models/professor';

const NAV_URL = environment.apiURL;

@Injectable({
  providedIn: 'root'
})
export class AdminService 
{
  professor = new Professor();

  constructor(private http : HttpClient) { }

  //khedmet bou 3asba

  registerAdmin(user:any){
    return this.http.post(`${environment.apiURL}/auth/register`,user)
  }

  //

  public addProfessor(professor : Professor):Observable<any>
  {
    return this.http.post<any>(`${NAV_URL}/addProfessor`,professor);
  }

  getTotalProfessors(): Observable<any[]> | undefined 
  {
    return this.http.get<any>(`${NAV_URL}/gettotalprofessors`);
  }

  getTotalUsers(): Observable<any[]> | undefined 
  {
    return this.http.get<any>(`${NAV_URL}/gettotalusers`);
  }

  getTotalCourses(): Observable<any[]> | undefined 
  {
    return this.http.get<any>(`${NAV_URL}/gettotalcourses`);
  }

  getTotalWishlist(): Observable<any[]> | undefined 
  {
    return this.http.get<any>(`${NAV_URL}/gettotalwishlist`);
  }

  getTotalEnrollments(): Observable<any[]> | undefined 
  {
    return this.http.get<any>(`${NAV_URL}/gettotalenrollments`);
  }

  getTotalEnrollmentCount(): Observable<any[]> | undefined 
  {
    return this.http.get<any>(`${NAV_URL}/gettotalenrollmentcount`);
  }

  getTotalChapters(): Observable<any[]> | undefined 
  {
    return this.http.get<any>(`${NAV_URL}/gettotalchapters`);
  }

}
