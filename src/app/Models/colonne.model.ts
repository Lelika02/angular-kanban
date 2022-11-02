import { Tache } from "./tache.model";

export class Colonne {

    constructor(public id: number, public titre: string, public taches: Tache[]){
        
    }
}