import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Mentee } from './mentee';
import { environment } from '../environments/environment.prod';


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
    'genderPronoun': '',
    'preferences': '',
    'mentorID': '',
    'mentor': ''

  }

  api_url = environment.apiBasePath;

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
  age: string, school: string, genderPronoun: string, preferences: string, mentorID: string,  mentor: string) {
    this.mentee.email = email;
    this.mentee.password = password;
    this.mentee.firstName = firstName;
    this.mentee.lastName = lastName;
    this.mentee.age = age;
    this.mentee.school = school;
    this.mentee.genderPronoun = genderPronoun;
    this.mentee.preferences = preferences;
    this.mentee.mentorID = mentorID;
    this.mentee.mentor = mentor;
  }
}
