import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Mentee } from '../mentee';
import { Mentor } from '../mentor';
import { Router, Routes } from '@angular/router';
import { LoginService } from '../login.service';
import { MenteesService } from '../mentees.service';
import { MentorsService } from '../mentors.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isLoading: boolean = false;

  alerts: any[] = [];

  isMentee: String = "Mentee";


  mentee: Mentee = {
    email: '',
    password: ''
  }

  mentor: Mentor = {
    email: '',
    password: ''
  }

  constructor(
    private activeModal: NgbActiveModal,
    private router: Router,
    private loginService: LoginService,
    private menteesService: MenteesService,
    private mentorsService: MentorsService
  ) { }

  ngOnInit() {
  }

  close() {
    this.activeModal.close();
  }

  menteelogin() {
    this.loginService.menteeLogin(this.mentee).subscribe(
      (response) => {
        console.log("hello mentee");
        if (response) {
          console.log(response);
          // console.log("this is working");
          this.loginService.setMenteeLoggedIn();
          // console.log(this.loginService.isLoggedOut);
          // console.log(this.loginService.menteeLoggedIn);

          this.menteesService.setMentee(
            response[0], 
            response[1],
            response[2],
            response[3],
            response[4],
            response[5],
            response[6],
            response[7],
            response[8],
            response[9],
          );

          console.log(this.menteesService.mentee);
          
          this.close();
          this.router.navigateByUrl('my-profile');
        }
      },
      (error: Error) => {
        console.log("Hello!")
        // if (error['error']) {
          this.alerts.push({
            message: "Either username or password is wrong."
          });
        // }
      }
    ); 
  }

  mentorlogin() {
    this.loginService.mentorLogin(this.mentor).subscribe(
      (response) => {
        console.log("hello mentor");
        if (response) {
          console.log("mentor login work");
          this.loginService.setMentorLoggedIn();

          this.mentorsService.setMentor(
            response[0], 
            response[1],
            response[2],
            response[3],
            response[4],
            response[5],
            response[6],
            response[7],
            response[8],
            response[9]
          );

          console.log(this.mentorsService.mentor);
          this.close();
          this.router.navigateByUrl('my-profile');
        }
      },
      (error: Error) => {
        if (error['error']) {
          this.alerts.push({
            message: "Either username or password is wrong."
          });
        }
      }
    ); 
  }

}
