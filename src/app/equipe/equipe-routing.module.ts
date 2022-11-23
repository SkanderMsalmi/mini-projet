import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailEquipe } from '../core/model/detailEquipe';
import { DetailEquipeComponent } from './detail-equipe/detail-equipe.component';
import { EquipeComponent } from './equipe.component';
import { FormEquipeComponent } from './form-equipe/form-equipe.component';
import { ListEquipeComponent } from './list-equipe/list-equipe.component';

const routes: Routes = [{ path: '', component: EquipeComponent,children:[
  {path:'',component:ListEquipeComponent},
  {path:'niveau/:niveau',component:ListEquipeComponent},

  {path:'editEquipe/:id',component:FormEquipeComponent},
  {path:':idEquipe/:idDetailEquipe',component:DetailEquipeComponent},
  
  {path:'new',component:FormEquipeComponent}
  
]  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EquipeRoutingModule { }
