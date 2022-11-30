import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EnseignantComponent } from './enseignant.component';
import { FormEnseignantComponent } from './form-enseignant/form-enseignant.component';
import { ListEnseignantComponent } from './list-enseignant/list-enseignant.component';

const routes: Routes = [
  { path: '', component: EnseignantComponent,children:[
   {path:'', component:ListEnseignantComponent},
   {path:'list', component: ListEnseignantComponent},  
  {path:'new', component: FormEnseignantComponent},
  {path:'update/:id', component: FormEnseignantComponent},
  
  ]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EnseignantRoutingModule { }
