import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { contrat } from 'src/app/core/model/Contrat';
import { ContaratService } from 'src/app/core/services/contrat.service';
import {CommonModule} from '@angular/common';
import { A } from 'chart.js/dist/chunks/helpers.core';
import{jsPDF} from 'jspdf'

import 'jspdf-autotable'
import autoTable, { Column } from 'jspdf-autotable';
import * as assert from 'assert';
import { toBase64String } from '@angular/compiler/src/output/source_map';
import { ClientRequest } from 'http';
import { Etudiant } from 'src/app/core/model/etudiant';
import { EtudiantService } from 'src/app/core/services/etudiant.service.tes';

@Component({
  selector: 'app-list-contrat',
  templateUrl: './list-contrat.component.html',
  styleUrls: ['./list-contrat.component.scss']
})
export class ListContratComponent implements OnInit {
c:contrat;
  table:string[];
  header:[['dateDebut',"datefin","archive","specialité"]];
  public all:contrat[];
  spec:String;
  dateD:Date;
  dateF:Date;
  constructor(private route:ActivatedRoute, private router:Router,private contratservice:ContaratService,private etudiantservice:EtudiantService) { }

  ngOnInit(): void {
   
   
    this.contratservice.getAllContrat().subscribe((response:contrat[])=>{
      this.all=response;},
      ()=>{console.log("error")},
            ()=>{console.log("complete")});}
    
      
    delete(c:contrat){
    let i=this.all.indexOf(c);
    this.contratservice.deleteContrat(c.idContrat).subscribe(
      ()=>{this.all.splice(i,1);}
  
    )
  }
  generatepdf(c:contrat){  

      let doc = new jsPDF();
      doc.setFontSize(10);
      var img = new Image()
      img.src = 'assets/img/img.webp'
      var logo = new Image()
      logo.src = 'assets/img/logo.jpg'
      
      doc.setFillColor(135, 124,45,0);
      doc.text("université de Tunis",150,150);
      doc.addImage(logo,'jpg',2,5,40,30)
      doc.text("Contrat numero°"+c.idContrat,90,30);
      doc.text("\n\n\n\n\n\n\n\n",2,11);
    (doc as any).autoTable({
      theme: "grid",
      tableWidth: 120,
      styles: { halign: "left" },
      margin: {left: 50, right:50,top:50},
      body:[["Nom de l'etudiant:  "+c.etudiant.nomE +"\n\nPrenom de l'etudiant:  "+c.etudiant.prenomE+"\n\nDate Debut:  "+c.dateDebutContrat+
      "\n\nDate Fin:  "+c.dateFinContrat+"\n\nArchive:  "+c.archive+"\n\nSpecilité:  "+c.specialite+"\n\nMontant Du Contrat:  "+c.montantContrat]],
      
      
    })
    doc.addImage(img,'webp',150,155,40,30)
   doc.output('dataurlnewwindow');
  doc.save('contrat'+c.idContrat+'.pdf')

  }
  update(c:contrat){
    let id=this.all.indexOf(c);
   
    this.router.navigate(['new/id'])
  

}
key:string='montantContrat';
reverse:boolean=false;
sort(key:any){
  this.key=key;
  this.reverse= !this.reverse;
   

}
filterDate(){
  if(this.dateD!=null&&this.dateF!=null)
  {
    this.all= this.all.filter(contrat =>(contrat.dateDebutContrat>this.dateD)&&(contrat.dateFinContrat<this.dateF));
    this.contratservice.getAllContrat().subscribe((response:contrat[])=>{
      this.all=response;},
      ()=>{console.log("error")},
            ()=>{console.log("complete")});

  }

}
filterSpec(){

  if(this.spec!=null)
  {
    this.all=this.all.filter((contrat)=>contrat.specialite==this.spec)
    this.contratservice.getAllContrat().subscribe((response:contrat[])=>{
      this.all=response;},
      ()=>{console.log("error")},
            ()=>{console.log("complete")});
}
}
afficheEtud(e:Etudiant){
  this.etudiantservice.getEtudiantById(e.idEtudiant).subscribe();

}
}
