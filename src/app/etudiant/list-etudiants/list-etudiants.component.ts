import { Component, OnInit } from '@angular/core';
import { Etudiant } from 'src/app/core/model/etudiant';
import { EtudiantService } from 'src/app/core/services/etudiant.service';

@Component({
  selector: 'app-list-etudiants',
  templateUrl: './list-etudiants.component.html',
  styleUrls: ['./list-etudiants.component.scss']
})
export class ListEtudiantsComponent implements OnInit {
  public students:Etudiant[];
  public filterOpt:string="";
  public filterText:string="";
  constructor(private es:EtudiantService) { }

  ngOnInit(): void {
    this.es.getAllEtudiants().subscribe(data=>{this.students=data;
    })
  }
  delete(e:Etudiant){
    let i= this.students.indexOf(e);
    this.es.delete(e.idEtudiant).subscribe(()=>this.students.splice(i,1))
  }

}
