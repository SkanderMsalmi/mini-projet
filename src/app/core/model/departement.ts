import { Enseignant } from "./Enseignant";

export class    Departement {
   idDepartement:  number; 
	nomDepart:string;
	codeInterne:string; 
	chefDepart:string;
	bloc:string;
	enseignants:Enseignant[];


}