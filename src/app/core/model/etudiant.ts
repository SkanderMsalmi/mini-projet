import { Departement } from "./departement"

export class Etudiant{
    idEtudiant: number
    prenomE: String
    nomE: String
    opt: "GAMIX"|"SE"|"SIM"|"NIDS"
    departement: Departement
  }