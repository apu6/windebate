import { Component, OnInit } from '@angular/core';
import { MenteesService } from '../mentees.service';
import { MentorsService } from '../mentors.service';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {

  constructor(
    private menteesService: MenteesService,
    public mentorsService: MentorsService,
    public loginService: LoginService
  ) { }

  mentee = this.menteesService.mentee;

  ngOnInit() {
  }

}
