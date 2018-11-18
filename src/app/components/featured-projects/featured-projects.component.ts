import { Component, OnInit } from '@angular/core';
import { ProjectsService } from 'src/app/providers/projects.service';
import { FundDetailsComponent } from './dialogs/fund-details/fund-details.component';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
import { WhyDonateComponent } from './dialogs/why-donate/why-donate.component';
import { MoreInfoComponent } from './dialogs/more-info/more-info.component';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-featured-projects',
  templateUrl: './featured-projects.component.html',
  styleUrls: ['./featured-projects.component.scss']
})
export class FeaturedProjectsComponent implements OnInit {

  featuredProjects: any;
  maxSummaryLength: number = 300;
  fundDetailDiag: MatDialogRef<FundDetailsComponent>;
  dialogMap: any;
  
  constructor(
    private projectsService: ProjectsService,
    private dialog: MatDialog,
    public toastr: ToastrService
  ) { 
    this.dialogMap = {
      'fundDetail': FundDetailsComponent,
      'whyDonate': WhyDonateComponent,
      'moreInfo': MoreInfoComponent
    }
  }

  ngOnInit() {
    this.toastr.info("You are currently viewing projects that are in need of urgent help.")
    this.projectsService.getFeaturedProjects().subscribe((result) => {
      this.featuredProjects = this.parseProjects(result);
      console.log(this.featuredProjects)
    })
  }

  openDialog(project, dialog) {
    this.fundDetailDiag = this.dialog.open(this.dialogMap[dialog], {
      width: '400px',
      data: {
        project
      }
    })
  }

  parseProjects(projects) {
    return projects.map((p) => {
      let imgHQ = p.image.imagelink.slice(-2)[0].url;
      let summaryShort = p.summary.substr(0, this.maxSummaryLength);
      let fundedPercentage = (p.funding * 100) / p.goal;
      let barStatus:  'bg-success' | 'bg-danger' | 'bg-warning';
      
      if (0 < fundedPercentage && fundedPercentage < 30) {
        barStatus = 'bg-danger';
      }
      if (30 < fundedPercentage && fundedPercentage < 70) {
        barStatus = 'bg-warning';
      }
      if (70 < fundedPercentage && fundedPercentage <= 100) {
        barStatus = 'bg-success';
      }

      return ({...p, 
        imgHQ,
        summaryShort,
        fundedPercentage,
        barStatus
      });
    })
  }

}
