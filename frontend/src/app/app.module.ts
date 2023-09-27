import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HedderComponent } from './hedder/hedder.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { HomeComponent } from './home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TeamComponent } from './team/team.component';
import { RouterLink } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CruddataComponent } from './cruddata/cruddata.component';
import { ViewComponent } from './view/view.component';
import { UpdatedataComponent } from './updatedata/updatedata.component';



@NgModule({
  declarations: [
    AppComponent,
    HedderComponent,
    FooterComponent,
    MainComponent,
    HomeComponent,
    TeamComponent,
    CruddataComponent,
    ViewComponent,
    UpdatedataComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,RouterLink,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
