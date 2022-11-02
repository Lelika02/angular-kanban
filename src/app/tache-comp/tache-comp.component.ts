import { Component, OnInit, Input } from '@angular/core';
import { ColServiceService } from '../Service/col-service.service';
import { Tache } from '../Models/tache.model';
import { TacheService } from '../Service/tache.service';
import { Colonne } from '../Models/colonne.model';
//import {MatDialog} from "@angular/material";

@Component({
  selector: 'app-tache-comp',
  templateUrl: './tache-comp.component.html',
  styleUrls: ['./tache-comp.component.scss']
})
export class TacheCompComponent implements OnInit {

  id!: number;
  description!: string;
  
  @Input() tache!: Tache;
  @Input() colonne!: Colonne;

  constructor(private colonneService: ColServiceService) {}

  ngOnInit(): void {

  }

  onDeleteTask(){
    this.colonneService.onDeleteTask(this.colonne.id, this.tache.id);
  }

 /* onEditTask(){
    let dialogRef = dialog.open(UserProfileComponent, {
      height: '400px',
      width: '600px',
    });
  }

  openDialog() {

    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    this.dialog.open(CourseDialogComponent, dialogConfig);
}*/

}
