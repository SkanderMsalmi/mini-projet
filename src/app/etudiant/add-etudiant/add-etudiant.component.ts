import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { Departement } from 'src/app/core/model/departement';
import { Etudiant } from 'src/app/core/model/etudiant';
import { fileHandler } from 'src/app/core/model/file';
import { EtudiantService } from 'src/app/core/services/etudiant.service';

@Component({
  selector: 'app-add-etudiant',
  templateUrl: './add-etudiant.component.html',
  styleUrls: ['./add-etudiant.component.scss']
})
export class AddEtudiantComponent implements OnInit {
  public etudiant:Etudiant=new Etudiant();
  public listDep:Departement[]=[{idDepart:1,nomDepart:"Info"},{idDepart:2,nomDepart:"Business"}];
  public action:String;

  constructor(private es: EtudiantService,private router: Router, private route: ActivatedRoute,private s: DomSanitizer) { }

  ngOnInit(): void {
    if (    this.route.snapshot.params["id"]  ){
      this.es.getById(this.route.snapshot.params["id"]).subscribe((data: Etudiant)=>{this.etudiant= data}) ;
      this.action="Update";
    }
    else{
    this.etudiant.opt="GAMIX"
    this.etudiant.departement=this.listDep[0]
    this.action="Create"
    }
  }

  save(){
    let fd=this.prepareFormData(this.etudiant);
    if (    this.route.snapshot.params["id"]    )
    this.es.update(this.etudiant).subscribe(()=>    this.router.navigate(['/etudiants']));
    else
    this.es.addEtudiant(fd).subscribe(()=>this.router.navigate(['/etudiants']))
  }
  prepareFormData(e:Etudiant):FormData{
    let formData = new FormData;
formData.append(
  'etudiant',
  new Blob([JSON.stringify(e)],{type: 'application/json'})
)
if (e.image){
formData.append('image',e.image.file,e.image.file.name)
console.log(e.image.file.type)}
    return formData;
  }
  onFileUpload(e:any){
    if(e.target.files){
     let f = e.target.files[0];

     let fh: fileHandler = {
      file: f,
      url: this.s.bypassSecurityTrustUrl(
        window.URL.createObjectURL(f)
      )
     }
     this.etudiant.image = fh;
    }

  }
}
