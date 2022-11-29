import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Equip } from 'src/app/core/model/equipe';
import { Etudiant } from 'src/app/core/model/etudiant';
import { EquipeService } from 'src/app/core/services/equipe.service';
import { EtudiantService } from 'src/app/core/services/etudiant.service.tes';

@Component({
  selector: 'app-equipe-etudiant',
  templateUrl: './equipe-etudiant.component.html',
  styleUrls: ['./equipe-etudiant.component.scss']
})
export class EquipeEtudiantComponent implements OnInit {
  public equipe : Equip;
  public listEtudiant : Etudiant[]=[];
  public tousEtudiant : Etudiant[]=[];
  constructor(private router:Router,private activatedRoute:ActivatedRoute,private serviceEquipe:EquipeService,private serviceEtudiant:EtudiantService) {
   }

  ngOnInit(): void {
    this.equipe= new Equip();
    let idEquipe = this.activatedRoute.snapshot.params['id'];
    this.serviceEquipe.getEquipeById(idEquipe).subscribe(
      (response)=>{
        this.equipe=response;
        this.listEtudiant = this.equipe.etudiants;
      }
    )
    this.serviceEtudiant.getAllEtudiants().subscribe(
      (reponse)=>{ this.tousEtudiant=reponse;
        console.log(this.tousEtudiant);
        
  }
    )

  }
  addMemberToTeam(){

  }
}
