import { Component, OnInit } from '@angular/core';
import { Contact } from '../contact';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  isLoading: boolean = false;
  alerts: any[] = [];

  contact: Contact = {
    name: '',
    email: '',
    message: ''
  }

  constructor(
    private contactService: ContactService
  ) { }

  ngOnInit() {
  }

  sendContactMessage() {
    this.contactService.sendContactMessage(this.contact).subscribe(  
    );
    this.alerts.push({
      type: 'success',
      message: "Success!"
    });
  }

}
