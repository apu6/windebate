import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from '../login/login.component';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.css']
})
export class TopNavComponent implements OnInit {

  menteeLoggedIn: boolean = this.loginService.checkIfMenteeLoggedIn();
  mentorLoggedIn: boolean = this.loginService.checkIfMentorLoggedIn();

  constructor(
    private modalService: NgbModal,
    private loginService: LoginService,
    private router: Router
  ) { }

  ngOnInit() {
    // this.isLoggedIn = this.loginService.isLoggedIn;
  }

  openLogin() {
    this.modalService.open(LoginComponent);
  }

  logout() {
    this.loginService.isLoggedOut = true;
    this.loginService.menteeLoggedIn = false;
    this.loginService.mentorLoggedIn = false;
    // this.router.navigateByUrl('home');
  }

}
