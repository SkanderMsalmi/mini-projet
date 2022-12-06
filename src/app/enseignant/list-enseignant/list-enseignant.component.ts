import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Enseignant } from 'src/app/core/model/Enseignant';
import { EnseignantService } from 'src/app/core/services/enseignant.service';

@Component({
  selector: 'app-list-enseignant',
  templateUrl: './list-enseignant.component.html',
  styleUrls: ['./list-enseignant.component.scss']
})
export class ListEnseignantComponent implements OnInit {
  public list:Enseignant[];
  public data:any;
  public order:boolean=false;
  public isDesc:boolean=false;

  public listlength:number=0;

  constructor(private ensService:EnseignantService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.ensService.getAllEnseignant().subscribe(
      (response:Enseignant[]) => {this.list=response;
        console.log(this.list), this.listlength=this.list.length},
        () => {console.log("error getEnseignant")},
        () => {console.log("complete")},
    )
  }

  deleteEns(e:Enseignant){
    let i=this.list.indexOf(e);
    this.ensService.deleteEnseignant(e.idEnseignant).subscribe(
      ()=>{this.list.splice(i,1)}
    )
  } 


//fonction de sorting 


sortName(name: any){ 
  this.ensService.sortString(this.list,name);
}
sortRole(role: any){ 
  this.ensService.sortString(this.list,role);
}
sortEmail(email: any){ 
  this.ensService.sortString(this.list,email);
}

sortCode(code: any){ 
  this.ensService.sortString(this.list,code);
}

}
