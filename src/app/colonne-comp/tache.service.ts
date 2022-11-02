import { Injectable } from '@angular/core';
import { Tache } from './../Models/tache.model';

@Injectable({
  providedIn: 'root'
})
export class TacheService {

   //Attributs
   taches: Tache[] = [];

   constructor(){
   }
 
   ngOnInit(): void {}
 
   //Ajout d'une tâche
   onAddTache(id: number, description: string){
     let tache = new Tache(id, description);
     this.taches.push(tache);
   }
 
   getTaches(){
     return this.taches;
   }
 
   onDeleteTache(id: number){
     for (var i = 0; i < this.taches.length; i++) {
       if (this.taches[i].id === id) {
           this.taches.splice(i, 1);
       }
     }
   }
}
