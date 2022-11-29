import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UniversiteRoutingModule } from './universite-routing.module';
import { UniversiteComponent } from './universite.component';
import { ListUniversiteComponent } from './list-universite/list-universite.component';
import { FormUniversiteComponent } from './form-universite/form-universite.component';
import { FormsModule } from '@angular/forms';
import { SearchPipe } from './list-universite/search.pipe';
 


@NgModule({
  declarations: [
    UniversiteComponent,
    ListUniversiteComponent,
    FormUniversiteComponent,
    SearchPipe
 
  ],
  imports: [
    CommonModule,
    UniversiteRoutingModule,
    FormsModule
  ]
})
export class UniversiteModule { }
