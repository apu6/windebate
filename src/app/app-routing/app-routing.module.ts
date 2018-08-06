import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { WhoWeAreComponent } from '../who-we-are/who-we-are.component';
import { MenteesComponent } from '../mentees/mentees.component';


const routes: Routes = [
  // { path: '', redirectTo: '/home', pathMatch: 'full'},
  // { path: 'home', component: HomeComponent },
  { path: 'who-we-are', component: WhoWeAreComponent },
  { path: 'mentees', component: MenteesComponent },
  // { path: 'mentors', component: MentorsComponent },
  // { path: 'contact', component: ContactComponent },
  // { path: 'my-profile', component: MyProfileComponent },
  // { path: 'drills', component: DrillsComponent },
  // { path: 'my-sessions', component: MySessionsComponent },
  // { path: 'view-my-hours', component: ViewMyHoursComponent },
  // { path: 'my-mentee', component: MyMenteeComponent }

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
