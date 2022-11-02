import { Injectable, Input} from '@angular/core';
import { Colonne } from '../Models/colonne.model';
import { Tache } from '../Models/tache.model';
 ;
@Injectable({
  providedIn: 'root'
})
export class ColServiceService {

  //Attributs
  colonnes: Colonne[] = [];

  constructor(){}

  ngOnInit(): void {}

  //Ajout d'une colonne
  onAddColonne(id: number, title: string){
    let taches : Tache[] = [];
    let colonne = new Colonne(id, title, taches);
    this.colonnes.push(colonne);
  }

  getColonnes(){
    return this.colonnes;
  }

  onDeleteColonne(id: number){
    for (var i = 0; i < this.colonnes.length; i++) {
      if (this.colonnes[i].id === id) {
          this.colonnes.splice(i, 1);
      }
    }
  }

  onAddTask(idColonne: number, id: number, description: string){
    let tache = new Tache(id, description);
    for(let col of this.colonnes){
      if(col.id === idColonne){
        col.taches.push(tache);
      }
    }
  }

  onDeleteTask(idColonne: number, id: number) {
    for(let col of this.colonnes){
      if(col.id === idColonne){
        for (var i = 0; i < col.taches.length; i++) {
          if (col.taches[i].id === id) {
            col.taches.splice(i, 1);
          }
        } 
      }
    }
     
  }
}


