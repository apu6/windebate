import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Mentee } from '../mentee';
import { MenteesService } from '../mentees.service';

@Component({
  selector: 'app-mentees-signup',
  templateUrl: './mentees-signup.component.html',
  styleUrls: ['./mentees-signup.component.css']
})
export class MenteesSignupComponent implements OnInit {

  isLoading: boolean = false;

  mentee: Mentee = {
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    age: '',
    school: '',
    genderPronoun: '',
    preferences: ''
  }

  confirmPassword = '';

  constructor(
    public activeModal: NgbActiveModal,
    private menteesService: MenteesService
  ) { }

  ngOnInit() {
  }

  close() {
    this.activeModal.close();
  }

  signup() {
    this.menteesService.createMentee(this.mentee).subscribe();
    this.close();
  }

}
