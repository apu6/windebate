import { Component, OnInit } from '@angular/core';
import { ChooseMenteeMentorComponent } from '../choose-mentee-mentor/choose-mentee-mentor.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private modalService: NgbModal
  ) { }

  ngOnInit() {
  }

  openChoice(){
    this.modalService.open(ChooseMenteeMentorComponent);
  }

  openLogin(){
    this.modalService.open(LoginComponent);
  }

}
