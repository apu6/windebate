import { Component, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MenteesSignupComponent } from '../mentees-signup/mentees-signup.component';
import { MentorsSignupComponent } from '../mentors-signup/mentors-signup.component';


@Component({
  selector: 'app-choose-mentee-mentor',
  templateUrl: './choose-mentee-mentor.component.html',
  styleUrls: ['./choose-mentee-mentor.component.css']
})
export class ChooseMenteeMentorComponent implements OnInit {

  constructor(
    private modalService: NgbModal,
    private activeModal: NgbActiveModal
  ) { }

  ngOnInit() {
  }

  close() {
    this.activeModal.close();
  }

  openMenteeSignup() {

  }

  openMentorsSignup() {
    this.activeModal.close();
    this.modalService.open(MentorsSignupComponent);
  }

  openMenteesSignup() {
    this.activeModal.close();
    this.modalService.open(MenteesSignupComponent);
  }

}
