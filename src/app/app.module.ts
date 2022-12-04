import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContratComponent } from './contrat/contrat.component';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { AsideComponent } from './shared/aside/aside.component';
import { FooterComponent } from './shared/footer/footer.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { ModalDeleteComponent } from './shared/modal-delete/modal-delete.component';
import { FormsModule } from '@angular/forms';
import {  HttpClientModule } from '@angular/common/http';
import { Ng2OrderModule } from 'ng2-order-pipe';
import jsPDF from 'jspdf';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    AsideComponent,
    FooterComponent,
    NavbarComponent,
    ModalDeleteComponent
  ],
  imports: [
    
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    Ng2SearchPipeModule,
    
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {}