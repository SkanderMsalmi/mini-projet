import { HttpClient } from '@angular/common/http';
import { identifierName } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Enseignant } from '../model/Enseignant';

@Injectable({
  providedIn: 'root'
})
export class EnseignantService {
  public url=environment.url+'controllerEnseignant/'

  constructor(private http: HttpClient) { }

  getAllEnseignant(){
    return this.http.get<Enseignant[]>(this.url+'DisplayEnseignants')

  }

  addEnseignant(e:Enseignant){
    console.log("please work my love"); 
    return this.http.post(this.url+'AddEnseignant/',e)
  }



  deleteEnseignant(id:number){
    return this.http.delete(this.url+'deleteEnseignant/'+id)
  } 
  updateEnseignant(e:Enseignant){
    return this.http.put(this.url+'UpdateEnseignant/',e)
  }

  getEnseignantByID(id:number){
    return this.http.get<Enseignant>(this.url+'DisplayEnseignantById/'+id)
  }

}
