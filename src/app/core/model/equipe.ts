import { DetailEquipe } from "./detailEquipe";
import { Etudiant } from "./etudiant";
import { Niveau } from "./Niveau";


export class Equip {
    idEquipe:number;
    nomEquipe:string;
    niveau:Niveau;
    detailEquipe:DetailEquipe;
    etudiants:Etudiant[]
}