import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UniversiteRoutingModule } from './universite-routing.module';
import { UniversiteComponent } from './universite.component';
import { ListUniversiteComponent } from './list-universite/list-universite.component';
import { FormUniversiteComponent } from './form-universite/form-universite.component';
import { FormsModule } from '@angular/forms';
import { SearchPipe } from './list-universite/search.pipe';
import { FormUniDepartsComponent } from './form-uni-departs/form-uni-departs.component';
import { ListDepartementsComponent } from './list-departements/list-departements.component';
import { DepartementComponent } from './departement/departement.component';
 


@NgModule({
  declarations: [
    UniversiteComponent,
    ListUniversiteComponent,
    FormUniversiteComponent,
    SearchPipe,
    FormUniDepartsComponent,
 
    ListDepartementsComponent,
    DepartementComponent
 
  ],
  imports: [
    CommonModule,
    UniversiteRoutingModule,
    FormsModule
  ]
})
export class UniversiteModule { }
