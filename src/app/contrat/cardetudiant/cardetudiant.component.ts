
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { contrat } from 'src/app/core/model/Contrat';
import { Etudiant } from 'src/app/core/model/etudiant';
import { EtudiantService } from 'src/app/core/services/etudiant.service';
@Component({
  selector: 'app-cardetudiant',
  templateUrl: './cardetudiant.component.html',
  styleUrls: ['./cardetudiant.component.scss']
})
export class CardetudiantComponent implements OnInit {

  constructor( private es:EtudiantService) {}
  @Input() etud: Etudiant;
  students:Etudiant[]
  public showModal:boolean=false;
  @Output() private showEtud:EventEmitter<Etudiant> = new EventEmitter();
  ngOnInit(): void {
    this.es.getAllEtudiants().subscribe(data=>{this.students=data;
    })
    
  }
  afficheEtud(){
    this.showEtud.emit(this.etud);
  }
}
