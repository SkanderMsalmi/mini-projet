import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, provideRoutes, Router } from '@angular/router';
import { contrat } from 'src/app/core/model/Contrat';
import { Etudiant } from 'src/app/core/model/etudiant';
import { ContaratService } from 'src/app/core/services/contrat.service';

@Component({
  selector: 'app-form-contrat',
  templateUrl: './form-contrat.component.html',
  styleUrls: ['./form-contrat.component.scss']
  
})
export class FormContratComponent implements OnInit {
 public contrat:contrat;
 public action:string;
 public all:Etudiant[];
 public etudiant:Etudiant;
  constructor(private currentRoute:ActivatedRoute,private serviceContrat:ContaratService,private router:Router) { 
    this.contrat = new contrat();
  }

  ngOnInit(): void {
    this.serviceContrat.getidNomPrenomEtudiant().subscribe((object:Etudiant[])=>this.all=object);
      
    let id=this.currentRoute.snapshot.params['id'];
    if(id!=null){
      this.action="update";
      this.serviceContrat.getContratByID(id).subscribe((object:contrat)=> this.contrat=object);
      console.log(this.contrat)
      console.log(id)
     }
   else{ 
    this.action="add";
    this.contrat=new contrat();}
  }
  saveContrat(){
    if(this.action=='add'){
    this.serviceContrat.addContrat(this.contrat).subscribe(
      ()=>{this.router.navigate(['/contrats/list'])
    })}
    else{
      this.serviceContrat.updateContrat(this.contrat).subscribe(
        ()=> this.router.navigate(['/contrats/list']) )}   
     }
     getEtudiants(){
     }

}
