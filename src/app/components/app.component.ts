import { Component } from '@angular/core';
import { fadeAnimation } from '../animations/router-transition';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  template: `
    <h2 mat-dialog-title>We Care to Share</h2>
    <mat-dialog-content> 
      <p> All data presented on this website belongs to GlobalGiving Foundation </p>
      <span class='warning'>We Care to Share solely seeks to spread awareness about the charity projects around the world.</span>
      <hr>
      <p> Developer's Email: aaronaung.95@gmail.com
    </mat-dialog-content>
  `
})
export class InfoComponent {}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [fadeAnimation]
})
export class AppComponent {
  title = 'WeCaretoShare';
  hidePicture = false;

  constructor(
    public dialog: MatDialog,
    public router: Router
  ) {}

  ngOnInit() {
    this.router.events.subscribe((r) => {
      // On router change - if it's the search page, hide the picture
      if (this.router.url == "/search") {
        this.hidePicture = true;
      } else {
        this.hidePicture = false;
      }
    })
  }


  openInfoDialog() {
    this.dialog.open(InfoComponent)
  }

  getRouterState(outlet) {
    return outlet.isActivated ? outlet.activatedRoute : '';
  }
}
