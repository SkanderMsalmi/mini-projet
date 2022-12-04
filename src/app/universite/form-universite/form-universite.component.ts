import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Departement } from 'src/app/core/model/departement';
import { Universite } from 'src/app/core/model/universite';
import { DepartementService } from 'src/app/core/services/departement.service';
import { UniversiteService } from 'src/app/core/services/universite.service';
@Component({
  selector: 'app-form-universite',
  templateUrl: './form-universite.component.html',
  styleUrls: ['./form-universite.component.scss']
})
export class FormUniversiteComponent implements OnInit {

  public universite: Universite;
  public action: string;
  public deplist: Departement[];
  public list: Universite[];
  public checkedlist: number[];
  public itsupdate: boolean;
  public unideplist: Departement[];
  public checkedlistname: Departement[];
  public newlist :  Departement[] ;
  public filtered1 :  Departement[] ;
  public filtered2 :  Departement[] ;
  //public newlist : (Departement[] | Departement[]) [];

  // public list: Universite[];



  constructor(private universiteService: UniversiteService, private depService: DepartementService,
    private router: Router, private currentRoute: ActivatedRoute) { }

  ngOnInit(): void {

    this.universiteService.getAllUniversite().subscribe(
      (response: Universite[]) => {
        this.list = response;
        //filter
        console.log(this.list)


      },
      () => { console.log("error") },
      () => { console.log("complete") },
    );



    let id = this.currentRoute.snapshot.params['id'];
    if (id != null) {


      this.action = "Update";
      this.itsupdate = true;

      /////////////////// departs of this uni 
      this.universiteService.getDeparts(id).subscribe(
        (response: Departement[]) => {
          this.unideplist = response;

        },

      );
      ///////////////////////////////////////         


      this.depService.getAllDepartement().subscribe(

        (data: Departement[]) => {
          this.deplist = data;
 
       for (let j=0; j<this.unideplist.length; j++) {
           
       
        this.deplist.filter(x => x.idDepartement == Number(this.unideplist[j].idDepartement)).map(x=>x.isselected = true)
        
   
         }
          console.log(this.deplist)
        }

      );

      this.universiteService.getUniversiteByID(id).subscribe(
        (object: Universite) => this.universite = object
      )

      console.log(this.universite)
      console.log(id)



    } else {
      this.action = "Add";
      this.universite = new Universite();
    }

  }


  saveUni() {
    if (this.action == 'Add') {


      this.universiteService.addUniversite(this.universite).subscribe(
        () => { this.router.navigate(['/universites/adddeparts']) }
      )
    }
    else {
      
        let id = this.currentRoute.snapshot.params['id'];
        this.checkedlist = this.deplist.filter(x => x.isselected == true).map(x => x.idDepartement)
        for (let i in this.checkedlist) {
          let checked = this.checkedlist[i];
          this.universiteService.assignUniToDep(id, checked, this.universite).subscribe()
    
        }
      
      this.universiteService.update(this.universite).subscribe(
        () => this.router.navigate(['/universites/'])
      )

      
    }
  }



  onchange() {
    console.log(this.deplist)
  }
  



}
