import { Component, OnInit, Input } from '@angular/core';
import { ColServiceService } from '../Service/col-service.service';
import { Colonne } from '../Models/colonne.model';
import { Tache } from '../Models/tache.model';
import { TacheService } from './tache.service';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';

export interface DialogData {
  description: string;
}

@Component({
  selector: 'app-colonne-comp',
  templateUrl: './colonne-comp.component.html',
  styleUrls: ['./colonne-comp.component.scss']
})
export class ColonneCompComponent implements OnInit {

  id: number = 0;
  description!: string;

  @Input() colonne!: Colonne;
  
  constructor(private colonneService: ColServiceService, public dialog: MatDialog) {}

  ngOnInit(): void {
  }

  onDeleteColonne() : void {
    this.colonneService.onDeleteColonne(this.colonne.id);
  }

  onAddTask(idColonne: number) : void {
    this.colonneService.onAddTask(idColonne, this.id, this.description);
    this.id++;
  }

  drop(event: CdkDragDrop<Tache[]>){
    if(event.previousContainer === event.container){
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    }else{
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

  onEdit(): void{
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '250px',
      data: {description: this.description},
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('vsvfsv');
      this.description = result;
    })
  }

}
