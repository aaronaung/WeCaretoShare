import { Component, OnInit } from '@angular/core';
import { GlobalGivingService } from 'src/app/providers/globalgiving.service';
import { ToastrService } from 'ngx-toastr';
import * as countries from "../../../assets/static/countries.json";
import { finalize } from "rxjs/operators";
@Component({
  selector: 'app-search-projects',
  templateUrl: './search-projects.component.html',
  styleUrls: ['./search-projects.component.scss'],
})
export class SearchProjectsComponent implements OnInit {

  themes: any;
  countries: any = countries.default;
  searching: boolean = false;
  searchResults: any = {start: 0, numberFound: 0};
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
    this.searching = true;
    this.globalGivingService.searchProjects(this.getQueryString())
      .pipe(
        finalize(() => this.searching = false)
      )
      .subscribe({
        next: (res) => {
          this.searchResults = res;
          this.toastr.success("Search completed! Sharing is caring <i class='fas fa-heart ml-2'></i>")
        },
        error: () => {
          this.toastr.error("There was an error in getting data from Global Giving. Please contact the developer.")
        }
      })
  }

  onClear() {
    if (this.searchResults.numberFound == 0) {
      this.toastr.info("Nothing to clear.")
    } else {
      this.toastr.info('The search results have been cleared.')
    }
    
    this.selectedCountry = "";
    this.selectedTheme = "";
    this.searchResults = {start: 0, numberFound: 0};
  }
}
