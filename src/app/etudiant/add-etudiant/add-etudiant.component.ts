import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Departement } from 'src/app/core/model/departement';
import { Etudiant } from 'src/app/core/model/etudiant';
import { EtudiantService } from 'src/app/core/services/etudiant.service';

@Component({
  selector: 'app-add-etudiant',
  templateUrl: './add-etudiant.component.html',
  styleUrls: ['./add-etudiant.component.scss']
})
export class AddEtudiantComponent implements OnInit {
  public etudiant:Etudiant=new Etudiant();
  public listDep:Departement[]=[{idDepart:1,nomDepart:"Info"},{idDepart:2,nomDepart:"Business"}];
  public action:String;

  constructor(private es: EtudiantService,private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    if (    this.route.snapshot.params["id"]  ){
      this.es.getById(this.route.snapshot.params["id"]).subscribe((data: Etudiant)=>{this.etudiant= data}) ;
      this.action="Update";
    }
    else{
    this.etudiant.opt="GAMIX"
    this.etudiant.departement=this.listDep[0]
    this.action="Create"
    }
  }
  save(){
    if (    this.route.snapshot.params["id"]    )
    this.es.update(this.etudiant).subscribe(()=>    this.router.navigate(['/etudiants']));
    else
    this.es.addEtudiant(this.etudiant).subscribe(()=>this.router.navigate(['/etudiants']))
  }

}
