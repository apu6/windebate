import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { WhoWeAreComponent } from '../who-we-are/who-we-are.component';
import { HomeComponent } from '../home/home.component';
import { MenteesComponent } from '../mentees/mentees.component';
import { MentorsComponent } from '../mentors/mentors.component';
import { ContactComponent } from '../contact/contact.component';
import { MyProfileComponent } from '../my-profile/my-profile.component';
import { DrillsComponent } from '../drills/drills.component';
import { MySessionsComponent } from '../my-sessions/my-sessions.component';
import { ViewMyHoursComponent } from '../view-my-hours/view-my-hours.component';
import { MyMenteeComponent } from '../my-mentee/my-mentee.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'who-we-are', component: WhoWeAreComponent },
  { path: 'mentees', component: MenteesComponent },
  { path: 'mentors', component: MentorsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'my-profile', component: MyProfileComponent },
  { path: 'drills', component: DrillsComponent },
  { path: 'my-sessions', component: MySessionsComponent },
  { path: 'view-my-hours', component: ViewMyHoursComponent },
  { path: 'my-mentee', component: MyMenteeComponent }

];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
