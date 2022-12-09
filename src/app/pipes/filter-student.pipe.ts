import { Pipe, PipeTransform } from '@angular/core';
import { Etudiant } from '../core/model/etudiant';

@Pipe({
  name: 'filterStudent'
})
export class FilterStudentPipe implements PipeTransform {

  transform(etudiants: Etudiant[], obj:{filterText:string,filterOpt:string}): Etudiant[] {
    if(etudiants.length === 0 ){
      return etudiants;
    }
    else if( obj.filterText !='' && obj.filterOpt !=''){
     etudiants= etudiants.filter((etudiant)=>{
     
        return etudiant.nomE.toLowerCase().includes(obj.filterText.toLowerCase()) || etudiant.prenomE.toLowerCase().includes(obj.filterText.toLowerCase());
       })
       etudiants= etudiants.filter((etudiant)=>{
     
        return etudiant.opt===obj.filterOpt;
       })
    }
    else if(obj.filterOpt != ''){
      etudiants= etudiants.filter((etudiant)=>{
     
        return etudiant.opt===obj.filterOpt;
       })
   
    }
    else if(obj.filterText !=''){
      etudiants= etudiants.filter((etudiant)=>{
     
        return etudiant.nomE.toLowerCase().includes(obj.filterText.toLowerCase()) || etudiant.prenomE.toLowerCase().includes(obj.filterText.toLowerCase());
       })
    }
   return etudiants;
  }

}