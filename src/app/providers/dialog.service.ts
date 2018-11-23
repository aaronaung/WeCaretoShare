import { Injectable } from "@angular/core";
import { FundDetailsComponent } from "../components/dialogs/fund-details/fund-details.component";
import { WhyDonateComponent } from "../components/dialogs/why-donate/why-donate.component";
import { MoreInfoComponent } from "../components/dialogs/more-info/more-info.component";
import { MatDialog, MatDialogRef } from "@angular/material";
import { CopyClipBoardComponent } from "../components/dialogs/copy-clip-board/copy-clip-board.component";

@Injectable({
    providedIn: 'root'
})
export class DialogService {
    public dialogs = {
      'fundDetail': FundDetailsComponent,
      'whyDonate': WhyDonateComponent,
      'moreInfo': MoreInfoComponent,
      'copyClipBoard': CopyClipBoardComponent
    }

    constructor(
        private dialog: MatDialog,
    ) {}

    openDialog(project, dialog): MatDialogRef<any> {
        if (dialog == 'copyClipBoard') {
            let textarea = document.createElement('textarea');
            textarea.value = project.projectLink;
            textarea.classList.add('copiedText')
            document.body.appendChild(textarea);
            textarea.focus();
            textarea.select();
            document.execCommand('copy');
            let node = document.getElementsByClassName('copiedText')[0];
            document.body.removeChild(node);
        }

        if (!this.dialogs[dialog]) {
            throw new Error(`Can't open dialog "${dialog}". Dialog not defined in dialog.service.ts.`)
        }
        return this.dialog.open(this.dialogs[dialog], {
            width: '400px',
            data: {
              project
            }
          })
    }
}