import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FeaturedProjectsComponent } from './featured-projects/featured-projects.component';
import { SearchProjectsComponent } from './search-projects/search-projects.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "featured", component: FeaturedProjectsComponent},
  {path: "search", component: SearchProjectsComponent}
];

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }
