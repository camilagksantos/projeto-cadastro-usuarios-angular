import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IUser } from '../../interfaces/user/IUser';

@Component({
  selector: 'app-user-before-and-after-dialog',
  standalone: false,
  templateUrl: './user-before-and-after-dialog.component.html',
  styleUrl: './user-before-and-after-dialog.component.scss'
})
export class UserBeforeAndAfterDialogComponent {
  hasChanges: boolean = false;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: {
      originalUser: IUser;
      updatedUser: IUser;
    }
  ) { 
    this.hasChanges = JSON.stringify(this.data.originalUser) !== JSON.stringify(this.data.updatedUser);
  }
}
