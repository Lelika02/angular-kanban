import { Component, OnInit } from '@angular/core';
import { ColServiceService } from './Service/col-service.service';
import { Colonne } from './Models/colonne.model';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Dialog } from '@angular/cdk/dialog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  //Attributs
  titre!: string;
  id: number = 0;
  colonnes: Colonne[] = [];

  constructor(private colService: ColServiceService){
  }

  ngOnInit(): void {
    this.colonnes = this.colService.getColonnes();
  }

  onAddColonne(){
    this.colService.onAddColonne(this.id, this.titre);
    this.id++;
  }

  drop(event: CdkDragDrop<Colonne[]>) {
    moveItemInArray(this.colonnes, event.previousIndex, event.currentIndex);
  }
  
}
