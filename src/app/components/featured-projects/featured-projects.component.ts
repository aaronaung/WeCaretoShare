import { Component, OnInit } from '@angular/core';
import { GlobalGivingService } from 'src/app/providers/globalgiving.service';
import { MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { DialogService } from 'src/app/providers/dialog.service';

@Component({
  selector: 'app-featured-projects',
  templateUrl: './featured-projects.component.html',
  styleUrls: ['./featured-projects.component.scss']
})
export class FeaturedProjectsComponent implements OnInit {
  /** @todo - REMOVE SUMMARY FROM THE DISPLAY - TOO MUCH INFO - display stuff users actually care about (metrics) - summary could be on MoreInfo */
  featuredProjects: any;
  maxSummaryLength: number = 300;
  
  constructor(
    private globalGivingService: GlobalGivingService,
    public toastr: ToastrService,
    public dialogService: DialogService
  ) {}

  ngOnInit() {
    // this.toastr.info("You are currently viewing projects that are in need of urgent help.")
    this.globalGivingService.getFeaturedProjects().subscribe({
      next: (result) => {
        this.featuredProjects = result;
      },
      error: () => {
        this.toastr.error("There was an error in getting data from Global Giving. Please contact the developer.")
      }
    })
  }

  openDialog(project, dialog) {
    this.dialogService.openDialog(project, dialog)
  }
}
