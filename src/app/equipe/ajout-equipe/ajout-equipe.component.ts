import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators, AbstractControl } from '@angular/forms';
@Component({
  selector: 'app-ajout-equipe',
  templateUrl: './ajout-equipe.component.html',
  styleUrls: ['./ajout-equipe.component.scss']
})
export class AjoutEquipeComponent implements OnInit {
  public form :FormGroup;
  public niveaux : [
    {label:'Expert',value:"EXPERT"},
    {label:'Senior',value:"SENIOR"},
    {label:'Junior',value:"JUNIOR"}
  ]
  get nom(){
    return this.form.get('nom')
  }
  get niveau(){
    return this.form.get('niveau')
  }
  get salle(){
    return this.form.get('salle')
  }
  get thematique(){
    return this.form.get('thematique')
  }

  validatorNomEquipe(formControl:AbstractControl):{[s:string]:boolean} {
    if(formControl.value === 'Existe'){
      return {existe:true}
    }else{
      return {};
    }
  }

  // validatorAsync(formControl:AbstractControl):Promise<{[s:string]:boolean}>{
  //   return new Promise((resolve,reject)=>{
  //     setTimeout(()=>{
  //       resolve({});
  //     },5000)
  //   })
  // }

  constructor() {
    this.form = new FormGroup({});
   }

  ngOnInit(): void {
    this.form = new FormGroup({
      nom: new FormControl('',[Validators.required,Validators.minLength(5),this.validatorNomEquipe]),
      niveau : new FormControl('',[Validators.required]),
      salle: new FormControl('',[Validators.required]),
      thematique : new FormControl('',[Validators.required])
    });
    this.form.setErrors(null);
  }

  public ajoutEquipe():void{
    console.log(this.form);
    
  }

}
