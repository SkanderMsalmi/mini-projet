import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Departement } from 'src/app/core/model/departement';
import { Universite } from 'src/app/core/model/universite';
import { DepartementService } from 'src/app/core/services/departement.service';
import { UniversiteService } from 'src/app/core/services/universite.service';

@Component({
  selector: 'app-list-universite',
  templateUrl: './list-universite.component.html',
  styleUrls: ['./list-universite.component.scss']
})
export class ListUniversiteComponent implements OnInit {
  searchUni: string = '';
  public list: Universite[];
  public unideplist: Departement[];
  public rowcolor : string;
  public listlength: number;
  public arr: (number | undefined)[] = [];

  // public all: Universite[];
  constructor(private universiteService: UniversiteService,private departementService: DepartementService, private currentRoute: ActivatedRoute,
    private route: ActivatedRoute,private toastr: ToastrService) { }

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

    this.departementService.getAllDepartement().subscribe(
      (response:Departement[]) => { this.unideplist = response ;
        console.log(this.list), 
        this.listlength=this.list.length ;

        for (let j=0; j<this.unideplist.length; j++) {
          this.list.filter(x => x.idUniv == Number(this.unideplist[j].universite?.idUniv)).map(x=>x.hasdep = true)
         }
         
       
        } 
        
    );

    

  }
  deleteUni(u: Universite) {
    let i = this.list.indexOf(u);
    this.universiteService.delete(u.idUniv).subscribe(
      () => { this.list.splice(i, 1);this.toastr.warning("L'equipe "+u.nomUniv +' supprimé avec succés','Suppression'); }
    )
  }

  getColor(u:Universite){ 

    

        if(u.hasdep == true)  
        { 
         this.rowcolor = 'yes';
       }else{
         this.rowcolor = 'no';
        }    

        console.log(this.rowcolor)
    
        
          
        switch (this.rowcolor) {
          case 'yes':
            return '#E9F1FF';
            case 'no':
              return '#ffffff';
                   default: 
              return '#ffffff';
        }  

  }


} 