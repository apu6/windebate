import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TopNavComponent } from './top-nav/top-nav.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';





import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavComponent,
    LoginComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    FormsModule,
    HttpClientModule,

  ],
  entryComponents: [
    LoginComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
