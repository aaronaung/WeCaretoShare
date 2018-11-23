import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent, InfoComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FeaturedProjectsComponent } from './featured-projects/featured-projects.component';
import { SearchProjectsComponent } from './search-projects/search-projects.component';
import { GlobalGivingService } from '../providers/globalgiving.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FundDetailsComponent } from './dialogs/fund-details/fund-details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WhyDonateComponent } from './dialogs/why-donate/why-donate.component';
import { MoreInfoComponent } from './dialogs/more-info/more-info.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { ProjectsComponent } from './search-projects/projects/projects.component';
import { MatDialogModule, MatTooltipModule, MatSelectModule, MatFormFieldModule, MatCardModule, MatButtonModule } from '@angular/material';
import { ProjectComponent } from './search-projects/projects/project/project.component';
import { DialogService } from '../providers/dialog.service';
import { CopyClipBoardComponent } from './dialogs/copy-clip-board/copy-clip-board.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FeaturedProjectsComponent,
    SearchProjectsComponent,
    FundDetailsComponent,
    WhyDonateComponent,
    MoreInfoComponent,
    InfoComponent,
    ProjectsComponent,
    ProjectComponent,
    CopyClipBoardComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CommonModule,
    ToastrModule.forRoot({enableHtml: true, timeOut: 2000, preventDuplicates: true}),
    MatDialogModule,
    MatTooltipModule,
    MatSelectModule,
    MatFormFieldModule,
    MatCardModule,
    MatButtonModule
  ],
  providers: [
    DialogService,
    GlobalGivingService,
    HttpClient
  ],
  entryComponents: [
    FundDetailsComponent,
    WhyDonateComponent,
    MoreInfoComponent,
    InfoComponent,
    CopyClipBoardComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
