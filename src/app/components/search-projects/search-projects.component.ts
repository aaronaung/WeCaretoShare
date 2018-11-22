import { Component, OnInit } from '@angular/core';
import { GlobalGivingService } from 'src/app/providers/globalgiving.service';
import { ToastrService } from 'ngx-toastr';
import * as countries from "../../../assets/static/countries.json";

@Component({
  selector: 'app-search-projects',
  templateUrl: './search-projects.component.html',
  styleUrls: ['./search-projects.component.scss']
})
export class SearchProjectsComponent implements OnInit {

  themes: any;
  countries: any = countries.default;

  selectedTheme: string = "";
  selectedCountry: string = "";

  constructor(
    private globalGivingService: GlobalGivingService,
    private toastr: ToastrService
  ) { }

  getQueryString() {
    let theme = this.selectedTheme == "" ? "": `theme:${this.selectedTheme}`;
    let country = this.selectedCountry == "" ? "": `country:${this.selectedCountry}`;
    return `filter=${theme},${country}&q=*`
  }
  
  ngOnInit() {
    console.log(this.countries)
    this.globalGivingService.getThemes().subscribe({
      next: (themes) => {
        this.themes = themes;
      },
      error: () => {
        this.toastr.error("There was an error in getting data from Global Giving. Please contact the developer.")
      }
    });
  }
  
  onSearch() {
    this.globalGivingService.searchProjects(this.getQueryString()).subscribe({
      next: (res) => {
        console.log(res);
      },
      error: () => {
        this.toastr.error("There was an error in getting data from Global Giving. Please contact the developer.")
      }
    })
  }

  onClear() {
    this.selectedCountry = "";
    this.selectedTheme = "";
  }
}
