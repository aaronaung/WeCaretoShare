import { Component, OnInit, Input } from '@angular/core';
import { fadeAnimation } from 'src/app/animations/router-transition';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  animations: [fadeAnimation]
})
export class ProjectsComponent {
  @Input() searchResults: any;

  constructor() { 
    
  }
}
