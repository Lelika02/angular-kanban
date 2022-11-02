import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-modif',
  templateUrl: './dialog-modif.component.html',
  styleUrls: ['./dialog-modif.component.scss']
})
export class DialogModifComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DialogModifComponent>) { }

  ngOnInit(): void {
  
  }

  closeDialog() {
    this.dialogRef.close('Pizza');
  }

  //let dialogRef = dialog.open(DialogModifComponent, {height: '400px', with: '600px'});
}
