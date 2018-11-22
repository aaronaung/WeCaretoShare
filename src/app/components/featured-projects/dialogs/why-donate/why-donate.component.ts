import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-why-donate',
  templateUrl: './why-donate.component.html',
  styleUrls: ['./why-donate.component.scss']
})
export class WhyDonateComponent {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }
}
