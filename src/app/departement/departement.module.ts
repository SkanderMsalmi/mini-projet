import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DepartementRoutingModule } from './departement-routing.module';
import { DepartementComponent } from './departement.component';
import { ListDepartementsComponent } from './list-departements/list-departements.component';
import { FormDepartementComponent } from './form-departement/form-departement.component';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';



@NgModule({
  declarations: [
    DepartementComponent,
    ListDepartementsComponent,
    FormDepartementComponent
  ],
  imports: [
    CommonModule,
    DepartementRoutingModule, 
    FormsModule,
    Ng2SearchPipeModule,
  ]
})
export class DepartementModule { }
