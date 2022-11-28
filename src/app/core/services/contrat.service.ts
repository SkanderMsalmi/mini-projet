import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { contrat } from '../model/Contrat';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn:'root'
})
export class ContaratService {
  List:contrat[];
  public url=environment.url+'contrat/';

  constructor(private http:HttpClient){}
  getAllContrat(){
    return this.http.get<contrat[]>(this.url);
     }
  addContrat(c:contrat){
       return this.http.post(this.url,c)
     }
  deleteContrat(id:number){
   return this.http.delete(this.url+id)
   }
  updateContrat(c:contrat){
     return this.http.put(this.url+c.id,c)
   }
  getContratByID(id:number){
     return this.http.get<contrat>(this.url+id)
   }
}
