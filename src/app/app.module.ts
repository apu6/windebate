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
import { WhoWeAreComponent } from './who-we-are/who-we-are.component';








import { AppComponent } from './app.component';

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
    WhoWeAreComponent,





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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
