import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { contrat } from 'src/app/core/model/Contrat';
import { Etudiant } from 'src/app/core/model/etudiant';
import { ContaratService } from 'src/app/core/services/contrat.service';
import { EtudiantService } from 'src/app/core/services/etudiant.service';

@Component({
  selector: 'app-etudiant-detail',
  templateUrl: './etudiant-detail.component.html',
  styleUrls: ['./etudiant-detail.component.scss']
})
export class EtudiantDetailComponent implements OnInit {
  public etudiant: Etudiant;
  public showModal:boolean=false;
  public contrats: contrat[];

  constructor(private es:EtudiantService,private cs:ContaratService,private activatedRoute:ActivatedRoute,private router : Router) {

   }

  ngOnInit(): void {
    if(this.activatedRoute.snapshot.params['id'] != null){
      this.es.getById(this.activatedRoute.snapshot.params['id']).subscribe(
        (object:Etudiant)=>{ 
          this.etudiant = object;
          this.cs.getContratsByEtudiant(object.idEtudiant).subscribe((data:any)=>this.contrats=data)  

        } 
      )
    }
  }
  delete(e:Etudiant){
    this.es.delete(e.idEtudiant).subscribe(()=>this.router.navigate(['/etudiants']))
  }

}
