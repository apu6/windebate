import { Component, OnInit } from '@angular/core';
import { MentorsService } from '../mentors.service';
import { Mentor } from '../mentor';

@Component({
  selector: 'app-my-mentee',
  templateUrl: './my-mentee.component.html',
  styleUrls: ['./my-mentee.component.css']
})
export class MyMenteeComponent implements OnInit {

  // mentor: Mentor;
  mentee: string;

  constructor(
    private mentorsService: MentorsService
  ) { }

  ngOnInit() {
    // this.mentee = this.mentorsService.getMentorsMentee();
    // console.log(this.mentee + "HIIIIII");
  }


}
