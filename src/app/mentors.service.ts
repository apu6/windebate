import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Mentor } from './mentor';
import { environment } from '../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class MentorsService {
  
  mentor: Mentor = {
    'email': '',
    'password': '',
    'firstName': '',
    'lastName': '',
    'age': '',
    'school': '',
    'genderPronoun': '',
    'experience': '',
    'mentorID': '',
    'mentee': ''
  }

  api_url = environment.apiBasePath;

  constructor(
    private http: HttpClient
  ) { }

  createMentor(mentor: Mentor): Observable<Mentor> {
    return this.http.post<Mentor>(`${this.api_url}/mentors`, mentor);
  }

  getAllMentors(): Observable<any> {
    return this.http.get<any>(`${this.api_url}/mentors`);
  }

  setMentor(email: string, password: string, firstName: string, lastName: string,
    age: string, school: string, genderPronoun: string, experience: string, mentorID: string, mentee: string) {
      this.mentor.email = email;
      this.mentor.password = password;
      this.mentor.firstName = firstName;
      this.mentor.lastName = lastName;
      this.mentor.age = age;
      this.mentor.school = school;
      this.mentor.genderPronoun = genderPronoun;
      this.mentor.experience = experience;
      this.mentor.mentorID = mentorID;
      this.mentor.mentee = mentee;
    }

  getMentor(): Observable<any> {
    return this.http.get<any>(`${this.api_url}/mentors/${this.mentor.mentorID}`)
  }

  getMentorsMentee(): string{
    this.getMentor().subscribe(
      (response) => {
        console.log(response);
        this.mentor.mentee = response[8];
        
      }
    )
    return this.mentor.mentee;
  }

}
