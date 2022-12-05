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
    
      this.universite = new Universite();
    

  }


  saveUni() {
    


      this.universiteService.addUniversite(this.universite).subscribe(
        () => { this.router.navigate(['/universites/adddeparts']) }
      )
     
  }



  onchange() {
    console.log(this.deplist)
  }
  



}
