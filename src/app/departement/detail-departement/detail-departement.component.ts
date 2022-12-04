import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Departement } from 'src/app/core/model/departement';
import { Enseignant } from 'src/app/core/model/Enseignant';
import { DepartementService } from 'src/app/core/services/departement.service';
import { EnseignantService } from 'src/app/core/services/enseignant.service';

@Component({
  selector: 'app-detail-departement',
  templateUrl: './detail-departement.component.html',
  styleUrls: ['./detail-departement.component.scss']
})
export class DetailDepartementComponent implements OnInit { 
  public listEns: Enseignant[]; 
  public enseignant:Enseignant;
  public departement:Departement; 
  public listlength:number; 



  constructor(private depService:DepartementService,private ensService:EnseignantService, private router:Router,private currentRoute:ActivatedRoute) { }

  ngOnInit(): void { 
    let  id=this.currentRoute.snapshot.params['id'];
    
    if(id!=null){
      this.depService.getDepartementByID(id).subscribe(
        (objDep:Departement) => this.departement=objDep
        )
        console.log(this.departement)
        console.log(id) 

        this.ensService.getEnseignantByDepartmentID(id).subscribe(
          (response:Enseignant[]) => {this.listEns=response;
            console.log(this.listEns), this.listlength=this.listEns.length, console.log(this.listEns)},
            () => {console.log("error getEnseignant")},
            () => {console.log("complete")},
        )
  


    }
    else {
      console.log("this is impossible...this will never hapeen we are litterally clicking in something that exists but error msg am i right")
    }
  }


  removeEnsFromDepartement( departement:Departement,enseignant: Enseignant) {
    let i = departement.enseignants.indexOf(enseignant);
    departement.enseignants.splice(i,-1);
    this.depService.updateDepartement(departement).subscribe(
      () => {}
    );


}
}
