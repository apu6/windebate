import { Injectable, ComponentFactory } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Contact } from './contact';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment.prod';


@Injectable({
  providedIn: 'root'
})
export class ContactService {

  api_url = environment.apiBasePath;

  contact: Contact = {
    name: '',
    email: '',
    message: ''
  }

  constructor(
    private http: HttpClient
  ) { }

  sendContactMessage(contact: Contact): Observable<Contact> {
    return this.http.post<Contact>(`${this.api_url}/contact`, contact);
  }
}
