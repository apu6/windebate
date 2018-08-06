import { Component, OnInit } from '@angular/core';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MenteesSignupComponent } from '../mentees-signup/mentees-signup.component';

@Component({
  selector: 'app-mentees',
  templateUrl: './mentees.component.html',
  styleUrls: ['./mentees.component.css']
})
export class MenteesComponent implements OnInit {

  constructor(
    private modalService: NgbModal
  ) { }

  ngOnInit() {
  }

  openSignup() {
    const modalRef = this.modalService.open(
      MenteesSignupComponent,
      {
        centered: true,
        // beforeDismiss: () => this.animationService.slideOut()
      }
    );
    
  }

}
