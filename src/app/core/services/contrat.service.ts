import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { contrat } from '../model/Contrat';
import { HttpClient } from '@angular/common/http';
import { Etudiant } from '../model/etudiant';

@Injectable({
  providedIn:'root'
})
export class ContaratService {
  List:contrat[];
  public url=environment.url+'ControleurContrat/';
public url2=environment.url+'ControleurEtudiant/';
  constructor(private http:HttpClient){}
  getAllContrat(){
    return this.http.get<contrat[]>(this.url+"displayContrats");
     }
  addContrat(c:contrat){
       return this.http.post(this.url+"addContrat",c)
     }
  deleteContrat(id:number){
   return this.http.delete(this.url+"deleteContrat/"+id)
   }
  updateContrat(c:contrat){
     return this.http.put(this.url+"updateContrat/",c)
   }
  getContratByID(id:number){
     return this.http.get<contrat>(this.url+"displayContrat/"+id)
   }
   getidNomPrenomEtudiant(){
    return this.http.get<Etudiant[]>(this.url2+"displayStudents")
   }
}
