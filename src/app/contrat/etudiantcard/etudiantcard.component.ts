import { Etudiant } from 'src/app/core/model/etudiant';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
@Component({
  selector: 'app-etudiantcard',
  templateUrl: './etudiantcard.component.html',
  styleUrls: ['./etudiantcard.component.scss']
})
export class EtudiantcardComponent implements OnInit {

  constructor() { }
  @Input() etud: Etudiant;
  public showModal:boolean=false;
  @Output() private showEtud:EventEmitter<Etudiant> = new EventEmitter();
  ngOnInit(): void {
  }
  afficheEtud(){
    this.showEtud.emit(this.etud);
  }
}
