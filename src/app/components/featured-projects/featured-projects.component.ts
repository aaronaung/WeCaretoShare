import { Component, OnInit } from '@angular/core';
import { GlobalGivingService } from 'src/app/providers/globalgiving.service';
import { MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { DialogService } from 'src/app/providers/dialog.service';
import { finalize } from 'rxjs/operators';
import { fadeAnimation } from 'src/app/animations/router-transition';

@Component({
  selector: 'app-featured-projects',
  templateUrl: './featured-projects.component.html',
  styleUrls: ['./featured-projects.component.scss'],
  animations: [fadeAnimation]
})
export class FeaturedProjectsComponent implements OnInit {
  /** @todo - REMOVE SUMMARY FROM THE DISPLAY - TOO MUCH INFO - display stuff users actually care about (metrics) - summary could be on MoreInfo */
  featuredProjects: any;
  maxSummaryLength: number = 300;
  loading: boolean = true;
  
  constructor(
    private globalGivingService: GlobalGivingService,
    public toastr: ToastrService,
    public dialogService: DialogService
  ) {}

  ngOnInit() {
    this.loading = true;
    this.globalGivingService.getFeaturedProjects()
      .pipe(finalize(() => {
        this.loading = false;
      }))
      .subscribe({
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
