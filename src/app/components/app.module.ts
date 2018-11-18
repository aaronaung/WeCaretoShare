import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent, InfoComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FeaturedProjectsComponent } from './featured-projects/featured-projects.component';
import { SearchProjectsComponent } from './search-projects/search-projects.component';
import { ProjectsService } from '../providers/projects.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FundDetailsComponent } from './featured-projects/dialogs/fund-details/fund-details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTooltipModule } from '@angular/material/tooltip';
import { WhyDonateComponent } from './featured-projects/dialogs/why-donate/why-donate.component';
import { MoreInfoComponent } from './featured-projects/dialogs/more-info/more-info.component';
import { CommonModule } from '@angular/common';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FeaturedProjectsComponent,
    SearchProjectsComponent,
    FundDetailsComponent,
    WhyDonateComponent,
    MoreInfoComponent,
    InfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CommonModule,
    ToastrModule.forRoot(),
    MatDialogModule,
    MatTooltipModule
  ],
  providers: [
    ProjectsService,
    HttpClient
  ],
  entryComponents: [
    FundDetailsComponent,
    WhyDonateComponent,
    MoreInfoComponent,
    InfoComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
