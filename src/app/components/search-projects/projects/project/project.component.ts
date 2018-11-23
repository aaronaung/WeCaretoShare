import { Component, OnInit, Input } from '@angular/core';
import { DialogService } from 'src/app/providers/dialog.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent {
  @Input() project;

  constructor(
    private dialogService: DialogService
  ) { }

  openDialog(project, dialog) {
    this.dialogService.openDialog(project, dialog);
  }
}
