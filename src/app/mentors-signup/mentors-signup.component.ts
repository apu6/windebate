import { Component, OnInit } from '@angular/core';
import { Mentor } from '../mentor';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { MentorsService } from '../mentors.service';


@Component({
  selector: 'app-mentors-signup',
  templateUrl: './mentors-signup.component.html',
  styleUrls: ['./mentors-signup.component.css']
})
export class MentorsSignupComponent implements OnInit {

  isLoading: boolean = false;

  mentor: Mentor = {
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    age: '',
    school: '',
    experience: ''
  }

  confirmPassword = '';

  constructor(
    public activeModal: NgbActiveModal,
    private mentorsService: MentorsService
  ) { }

  ngOnInit() {
  }

  close() {
    this.activeModal.close();
  }

  signup() {
    this.mentorsService.createMentor(this.mentor).subscribe();
    this.close();
  }

}
