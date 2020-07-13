import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-delete-confirmation',
  template: `
    <h2 mat-dialog-title>Do you want to remove this employee permanently</h2>
    <mat-dialog-actions>
        <button mat-raised-button mat-dialog-close="false">No</button>
        <button mat-raised-button mat-dialog-close="true">Remove</button>
    </mat-dialog-actions>
  `,
  styleUrls: ['./delete-confirmation.component.css']
})
export class DeleteConfirmationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
