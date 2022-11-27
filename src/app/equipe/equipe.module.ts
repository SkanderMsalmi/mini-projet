import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EquipeRoutingModule } from './equipe-routing.module';
import { EquipeComponent } from './equipe.component';
import { DetailEquipeComponent } from './detail-equipe/detail-equipe.component';
import { FormEquipeComponent } from './form-equipe/form-equipe.component';
import { ListEquipeComponent } from './list-equipe/list-equipe.component';

import { FormsModule } from '@angular/forms';
import { FilterEquipPipe } from '../pipes/filter-equip.pipe';
import { EquipeRowComponent } from './equipe-row/equipe-row.component';


@NgModule({
  declarations: [
    EquipeComponent,
    DetailEquipeComponent,
    FormEquipeComponent,
    ListEquipeComponent,
    FilterEquipPipe,
    EquipeRowComponent
  ],
  imports: [
    CommonModule,
    EquipeRoutingModule,
    FormsModule
  ]
})
export class EquipeModule { }
