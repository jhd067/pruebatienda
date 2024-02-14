import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';



// Rutas
import { APP_ROUTING } from './app.routes'




//Servicios


//Componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { RepuestosComponent } from './components/repuestos/repuestos.component';
import { RepuestoComponent } from './components/repuesto/repuesto.component';
import { SidebarComponent } from './components/shared/sidebar/sidebar.component';

import { ButtonModule } from 'primeng/button';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
/*import {LineaService} from './services/linea.service'*/

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    RepuestosComponent,
    RepuestoComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    APP_ROUTING,
    ButtonModule,
    FormsModule
  ],
  providers: [
        
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
