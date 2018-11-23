import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-copy-clip-board',
  templateUrl: './copy-clip-board.component.html',
  styleUrls: ['./copy-clip-board.component.scss']
})
export class CopyClipBoardComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }
}
