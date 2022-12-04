import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Departement } from 'src/app/core/model/departement';
import { DepartementService } from 'src/app/core/services/departement.service';


@Component({
  selector: 'app-list-departements',
  templateUrl: './list-departements.component.html',
  styleUrls: ['./list-departements.component.scss']
})
export class ListDepartementsComponent implements OnInit {
public list: Departement[];
public listlength:number=0;
searchtext:any;
  constructor(private depService:DepartementService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.depService.getAllDepartement().subscribe(
      (response:Departement[]) => { this.list = response ;
      console.log(this.list), this.listlength=this.list.length},
      () => { console.log("error") },
      () => { console.log("complete") },
      
    )
  }
deleteDep(d:Departement){
  let i=this.list.indexOf(d);
  this.depService.deleteDepartement(d.idDepartement).subscribe(
    ()=>{this.list.splice(i,1)}
  )
}
getColor(departement: Departement) { (2)
  switch (departement.bloc) {
    case 'A':
      return 'primary';
    case 'B':
      return 'blue';
    case 'C':
      return 'red';
      case 'D':
        return 'primary';
      case 'E':
        return '#7E191B';
      case 'F':
        return 'yellow';
        case 'G':
        return 'purple';
        default: 
        return 'primary'
  }

  } 





}
