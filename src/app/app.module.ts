import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TopNavComponent } from './top-nav/top-nav.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AlertsComponent } from './alerts/alerts.component';
import { MenteesSignupComponent } from './mentees-signup/mentees-signup.component';
import { MentorsSignupComponent } from './mentors-signup/mentors-signup.component';
import { MenteesComponent } from './mentees/mentees.component';
import { MentorsComponent } from './mentors/mentors.component';
import { ChooseMenteeMentorComponent } from './choose-mentee-mentor/choose-mentee-mentor.component';
import { ContactComponent } from './contact/contact.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { DrillsComponent } from './drills/drills.component';
import { MySessionsComponent } from './my-sessions/my-sessions.component';
import { ViewMyHoursComponent } from './view-my-hours/view-my-hours.component';
import { MyMenteeComponent } from './my-mentee/my-mentee.component';
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';
import { ResourcesComponent } from './resources/resources.component';
import { ArticlesComponent } from './articles/articles.component';
import { LindseyArticleComponent } from './lindsey-article/lindsey-article.component';
import { KatieComponent } from './katie/katie.component';


@NgModule({
  declarations: [
    AppComponent,
    TopNavComponent,
    LoginComponent,
    AlertsComponent,
    MenteesSignupComponent,
    MentorsSignupComponent,
    MenteesComponent,
    MentorsComponent,
    ChooseMenteeMentorComponent,
    ContactComponent,
    MyProfileComponent,
    DrillsComponent,    
    MySessionsComponent,
    ViewMyHoursComponent,
    MyMenteeComponent,
    HomeComponent,
    ResourcesComponent,
    ArticlesComponent,
    LindseyArticleComponent,
    KatieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    FormsModule,
    HttpClientModule,
  ],
  entryComponents: [
    LoginComponent,
    MenteesSignupComponent,
    MentorsSignupComponent,
    ChooseMenteeMentorComponent,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
