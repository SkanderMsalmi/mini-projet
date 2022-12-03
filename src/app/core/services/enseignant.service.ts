import { HttpClient, HttpParams } from '@angular/common/http';
import { identifierName } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Enseignant } from '../model/Enseignant';

@Injectable({
  providedIn: 'root'
})
export class EnseignantService {
  public url=environment.url+'controllerEnseignant/'
  isDesc: boolean=false;
  data: any;

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

  //a tiny bit advanced but we love it

  

  getEnseignantByDepartmentID(id:number){
        console.log("please work my love"); 

    return this.http.get<Enseignant[]>(this.url+'getEnseignantDepartement/'+id)

  }

//  methode to assign to use in service departement <3
//@PutMapping("assignEnseignantDepartement/{iddep}/{idEns}")
//public void assignEnseignantDepartement(@PathVariable("iddep") Integer idDepratement, @PathVariable("idEns") Integer idEnseignant) {
//  ensDep.assignEnseignantToDepartement(idEnseignant, idDepratement);
//} 





assingEnseignantToDepartement(e:Enseignant,iddep:number){ 
  console.log(this.url+'assignEnseignantDepartement/'+iddep+'/'+e.idEnseignant);
  return this.http.put(this.url+'assignEnseignantDepartement/'+iddep+'/'+e.idEnseignant,e)
}

//deleteEnseignantFromDeprtement (still mabditesh fiha jimla :( ))


sortString(list:Enseignant[],property: any){ 
  this.data=list;
  this.isDesc=!this.isDesc; 
  let direction =this.isDesc?1: -1; 
  this.data.sort(function(a: { [x: string]: number; },b: { [x: string]: number; }){
    if(a[property]< b[property]){
      return -1 * direction ; 
    }
    else if (a[property]> b[property]){
      return 1 * direction ; 
    } 
    else { 
      return 0; 

    }
  });
  
 }







}
