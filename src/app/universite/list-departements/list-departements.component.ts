import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Departement } from 'src/app/core/model/departement';
import { Universite } from 'src/app/core/model/universite';
import { DepartementService } from 'src/app/core/services/departement.service';
import { UniversiteService } from 'src/app/core/services/universite.service';

@Component({
  selector: 'app-list-departements',
  templateUrl: './list-departements.component.html',
  styleUrls: ['./list-departements.component.scss']
})
export class ListDepartementsComponent implements OnInit {
  public universite: Universite;
  public unideplist: Departement[];
  public uniname : String;

  constructor(private universiteService: UniversiteService,
    private departementService: DepartementService,private toastr: ToastrService, private currentRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    let id = this.currentRoute.snapshot.params['id'];

    this.departementService.getDeparts(id).subscribe(
      (response: Departement[]) => {
        this.unideplist = response;

        console.log(this.unideplist)


      },
      () => { console.log("error") },
      () => { console.log("complete") },
    );


    if(id != null){
      this.universiteService.getUniversiteByID(id).subscribe(
        (object:Universite)=>{ 
          this.universite = object; 
        
          this.uniname =this.universite.nomUniv;
        }      
      )
      
   
  }
}
  unassignDep(d: Departement) {
    let id = this.currentRoute.snapshot.params['id'];
    let i = this.unideplist.indexOf(d);
    if (i != -1) {
      
      this.universiteService.unassignDepFromUni(id, d.idDepartement, this.universite).subscribe(
        ()=>{this.unideplist.splice(i,1)}
        //() => this.router.navigate(['/universites/list'])
      )

    }

  }

  deleteDep(d:Departement){
    let i=this.unideplist.indexOf(d);
    if(confirm("Are you sure to delete "+d.nomDepart)) {
  
    this.departementService.deleteDepartement(d.idDepartement).subscribe(
      ()=>{this.unideplist.splice(i,1),   this.toastr.success(d.nomDepart+' has been deleted successfully','Success');
    },
      error => (err: string) => {
        console.log("err" + err);
        this.toastr.error('something went wrong !', 'Error');
      }
    )}}

  


}
