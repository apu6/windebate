import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MentorsSignupComponent } from '../mentors-signup/mentors-signup.component';

@Component({
  selector: 'app-mentors',
  templateUrl: './mentors.component.html',
  styleUrls: ['./mentors.component.css']
})
export class MentorsComponent implements OnInit {

  constructor(
    private modalService: NgbModal
  ) { }

  ngOnInit() {
  }

  openSignup() {
    const modalRef = this.modalService.open(
      MentorsSignupComponent,
      {
        centered: true,
        // beforeDismiss: () => this.animationService.slideOut()
      }
    );
    
  }

}
