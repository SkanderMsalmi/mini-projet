import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EnseignantRoutingModule } from './enseignant-routing.module';
import { EnseignantComponent } from './enseignant.component';
import { FormEnseignantComponent } from './form-enseignant/form-enseignant.component';
import { ListEnseignantComponent } from './list-enseignant/list-enseignant.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    EnseignantComponent,
    FormEnseignantComponent,
    ListEnseignantComponent
  ],
  imports: [
    CommonModule,
    EnseignantRoutingModule,
    FormsModule
  ]
})
export class EnseignantModule { }
