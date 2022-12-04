import { NULL_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Departement } from 'src/app/core/model/departement';
import { Enseignant } from 'src/app/core/model/Enseignant';
import { DepartementService } from 'src/app/core/services/departement.service';
import { EnseignantService } from 'src/app/core/services/enseignant.service';

@Component({
  selector: 'app-detail-enseignant',
  templateUrl: './detail-enseignant.component.html',
  styleUrls: ['./detail-enseignant.component.scss']
})
export class DetailEnseignantComponent implements OnInit {

  public enseignant: Enseignant; 
  public list: Departement[];
  public dep: Departement;

  public depatmentForm:FormGroup;
  public id:number;
  selectedOption: number;
  printedOption: number;


  constructor(private ensService:EnseignantService,private depService:DepartementService,private router:Router,private currentRoute: ActivatedRoute) { }

  ngOnInit(): void {

    this.depatmentForm = new FormGroup({ 
      'idDepartement': new FormControl(),

    });


     let id=this.currentRoute.snapshot.params['id']; 
    if(id!=null){
      this.ensService.getEnseignantByID(id).subscribe(
        (objDep:Enseignant) => this.enseignant=objDep
      )
      console.log(this.enseignant)
      console.log(id)

    }


    this.depService.getAllDepartement().subscribe(
      (response:Departement[]) => { this.list = response ;
      console.log(this.list)},
      () => { console.log("error") },
      () => { console.log("complete") },
      
    )
  }
 // mySelect: [this.options[0].key
 // submit(){ 
    
   //   console.log(this.depatmentForm.value);
     // console.log(this.enseignant.idEnseignant);
   // }
   
    
    
    print() {
      this.printedOption = this.selectedOption;
      console.log(this.selectedOption); 
      console.log(this.enseignant.idEnseignant);
      //assingEnseignantToDepartement(e:Enseignant,idens:number,iddep:number)
      this.ensService.assingEnseignantToDepartement(this.enseignant,this.printedOption).subscribe();

            console.log("please work"); 



    }
  }


  


