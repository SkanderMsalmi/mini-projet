import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Departement } from 'src/app/core/model/departement';
import { Universite } from 'src/app/core/model/universite';
import { DepartementService } from 'src/app/core/services/departement.service';
import { UniversiteService } from 'src/app/core/services/universite.service';

@Component({
  selector: 'app-form-departement',
  templateUrl: './form-departement.component.html',
  styleUrls: ['./form-departement.component.scss']
})
export class FormDepartementComponent implements OnInit {
  public unilist: Universite[];
  public departement:Departement;
  public  action:string  ;
  public formDE: FormGroup;
  pattern="^[ a-zA-Z][a-zA-Z ]*$";

//[ Validators.required,Validators.pattern(this.pattern),Validators.minLength(3)]

  constructor(private universiteService : UniversiteService,  private depService:DepartementService,private router:Router,private currentRoute: ActivatedRoute,private toastr: ToastrService) { }
 
  ngOnInit(): void {
    this.formDE = new FormGroup({
      'nomDepart': new FormControl('',[ Validators.required,Validators.pattern(this.pattern),Validators.minLength(3)]),
      'codeInterne': new FormControl('', [ Validators.required,Validators.minLength(3)]),
      'bloc': new FormControl('', Validators.required),
      'universite': new FormControl('', Validators.required),
      //'chefDepart': new FormControl('', [ Validators.required,Validators.pattern(this.pattern)]),

    })

    this.universiteService.getAllUniversite().subscribe(
      (response: Universite[]) => { this.unilist = response ;
         //filter
    console.log(this.unilist)
    

      },
      () => { console.log("error") },
      () => { console.log("complete") },
    );


    let id=this.currentRoute.snapshot.params['id']; 
    if(id!=null){
      this.action="Update";
      this.depService.getDepartementByID(id).subscribe(
        (objDep:Departement) => this.departement=objDep
      )
      console.log(this.departement)
      console.log(id)

    }
    else {
      this.action="Add";
      this.departement = new Departement();
    }


    
  }
  saveDep(){
    
    if(this.action=='Add')

    {     console.log(this.departement);

      this.depService.addDeprement(this.departement).subscribe(
        ()=>{  this.toastr.success('Departement has been added !','Success')
          this.router.navigate(['/departements/list'])}
      )
    }
    else {
      console.log("action is edit");

      this.depService.updateDepartement(this.departement).subscribe(
        
        ()=> {        this.toastr.success('Departement has been updated !','Success')

          this.router.navigate(['/departements/list'])
      }
        
      )
    }
  }
  back(){
    this.router.navigate(['/departments/list'])

  }

}