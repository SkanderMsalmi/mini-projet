import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { EtudiantRoutingModule } from './etudiant-routing.module';
import { EtudiantComponent } from './etudiant.component';
import { ListEtudiantsComponent } from './list-etudiants/list-etudiants.component';
import { AddEtudiantComponent } from './add-etudiant/add-etudiant.component';
import { EtudiantDetailComponent } from './etudiant-detail/etudiant-detail.component';
import {FilterStudentPipe} from '../pipes/filter-student.pipe'

@NgModule({
  declarations: [
    EtudiantComponent,
    ListEtudiantsComponent,
    AddEtudiantComponent,
    EtudiantDetailComponent,
    FilterStudentPipe
  ],
  imports: [
    CommonModule,
    EtudiantRoutingModule,
    FormsModule
    
  ]
})
export class EtudiantModule { }
