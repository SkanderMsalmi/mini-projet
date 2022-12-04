import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormUniDepartsComponent } from './form-uni-departs/form-uni-departs.component';
import { FormUniversiteComponent } from './form-universite/form-universite.component';
import { ListDepartementsComponent } from './list-departements/list-departements.component';
import { ListUniversiteComponent } from './list-universite/list-universite.component';
import { UniversiteComponent } from './universite.component';



const routes: Routes =  [
  {path:'',component: UniversiteComponent,children:[
  {path:'', component: ListUniversiteComponent},
  {path:'list', component: ListUniversiteComponent},  
  {path:'new', component: FormUniversiteComponent},
  {path:'adddeparts', component: FormUniDepartsComponent},  
  {path:'update/:id', component: FormUniversiteComponent}, 
  {path:'updateDeparts', component: FormUniDepartsComponent},   
  {path:'departements/:id', component: ListDepartementsComponent},
  
  
 ]}]

@NgModule({
  
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UniversiteRoutingModule { }
