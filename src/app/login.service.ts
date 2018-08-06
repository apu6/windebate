import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Mentee } from './mentee';
import { Observable } from 'rxjs';
import { Mentor } from './mentor';
import { environment } from '../environments/environment.prod';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  api_url = environment.apiBasePath;

  isLoggedOut: boolean = true;

  menteeLoggedIn: boolean = false;
  mentorLoggedIn: boolean = false;

  constructor(
    private http: HttpClient
  ) { }

  checkIfMenteeLoggedIn() {
    return this.menteeLoggedIn;
  }

  setMenteeLoggedIn() {
    this.isLoggedOut = false;
    this.menteeLoggedIn = true;
  }

  checkIfMentorLoggedIn() {
    return this.mentorLoggedIn;
  }

  setMentorLoggedIn() {
    this.isLoggedOut = false;
    this.mentorLoggedIn = true;
  }

  menteeLogin(mentee: Mentee): Observable<any> {
    return this.http.post<any>(`${this.api_url}/login/mentee`, mentee);
  }

  mentorLogin(mentor: Mentor): Observable<any> {
    return this.http.post<any>(`${this.api_url}/login/mentor`, mentor)
  }

  
}
