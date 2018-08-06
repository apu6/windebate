import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Mentee } from './mentee';

@Injectable({
  providedIn: 'root'
})
export class MenteesService {

  mentee: Mentee = {
    'email': '',
    'password': '',
    'firstName': '',
    'lastName': '',
    'age': '',
    'school': '',
    'preferences': '',
    'menteeID': ''
    // 'mentor': '',

  }

  api_url = 'https://windebate-api.herokuapp.com';

  constructor(
    private http: HttpClient
  ) { }

  createMentee(mentee: Mentee): Observable<Mentee> {
    return this.http.post<Mentee>(`${this.api_url}/mentees`, mentee);
  }

  getAllMentees(): Observable<any> {
    return this.http.get<any>(`${this.api_url}/mentees`);
  }

  getMentee(): Observable<any> {
    return this.http.get<any>(``)
  }

  setMentee(email: string, password: string, firstName: string, lastName: string,
  age: string, school: string, preferences: string, menteeID: string) {
    this.mentee.email = email;
    this.mentee.password = password;
    this.mentee.firstName = firstName;
    this.mentee.lastName = lastName;
    this.mentee.age = age;
    this.mentee.school = school;
    this.mentee.preferences = preferences;
    this.mentee.menteeID = menteeID;
    // this.mentee.mentor = mentor;
  }
}
