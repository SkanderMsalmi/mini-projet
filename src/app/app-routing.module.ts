import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'universites', loadChildren: () => import('./universite/universite.module').then(m => m.UniversiteModule) }, { path: 'etudiants', loadChildren: () => import('./etudiant/etudiant.module').then(m => m.EtudiantModule) }, { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) }, { path: 'contrats', loadChildren: () => import('./contrat/contrat.module').then(m => m.ContratModule) }, { path: 'departements', loadChildren: () => import('./departement/departement.module').then(m => m.DepartementModule) }, { path: 'equipes', loadChildren: () => import('./equipe/equipe.module').then(m => m.EquipeModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
