import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from '../pages/not-found/not-found.component';
import { FormUniDepartsComponent } from './form-uni-departs/form-uni-departs.component';
import { FormUniversiteComponent } from './form-universite/form-universite.component';
import { ListDepartementsComponent } from './list-departements/list-departements.component';
import { ListUniversiteComponent } from './list-universite/list-universite.component';
import { UniversiteComponent } from './universite.component';
import { UpdateFormComponent } from './update-form/update-form.component';



const routes: Routes =  [
  {path:'',component: UniversiteComponent,children:[
  {path:'', component: ListUniversiteComponent},
  {path:'list', component: ListUniversiteComponent},  
  {path:'new', component: FormUniversiteComponent}, 
  {path:'update/:id', component: UpdateFormComponent},  
  {path:'departements/:id', component: ListDepartementsComponent},
  {path:'**', component: NotFoundComponent},
  
 ]}]

@NgModule({
  
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UniversiteRoutingModule { }