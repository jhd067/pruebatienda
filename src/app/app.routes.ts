import { Component } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { RepuestosComponent } from "./components/repuestos/repuestos.component";

const APP_ROUTES: Routes =[

     {path: 'home', component: HomeComponent },
     {path: 'repuestos/:inputbusqueda', component: RepuestosComponent },

     {path: '**', pathMatch: 'full', redirectTo: 'home' }

];

     export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);



