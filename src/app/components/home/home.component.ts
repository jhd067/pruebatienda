import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  
})
export class HomeComponent{

  paises:any[]= [];
  constructor( private http: HttpClient){
    this.http.get('https://restcountries.com/v3.1/lang/spanish')
    .subscribe ((resp: any)=> {
      this.paises= resp;
      console.log(resp);
      
    });  

  }

  ngOnInit(){

   

  
  }
 capturarDatos() {
// throw new Error('Method not implemented.');
// }
// capturarDatos() {
  
//    var seleccionlinea = (<HTMLSelectElement>document.getElementById("seleccionLinea")).value;

  
// var textoInput = (<HTMLInputElement>document.getElementById("busqueda")).value;

  
//   var datosEleccion: { opcionEleccion: string, textoBusqueda: string } = {
//      opcionEleccion: seleccionlinea,
//       textoBusqueda: textoInput
//  };

//   // // Hacer algo con el objeto, por ejemplo, mostrarlo en la consola
//  console.log(datosEleccion);
}
mostrarLinea(){

  var seleccionlinea = (<HTMLSelectElement>document.getElementById("seleccionLinea")).value;
  var seccionLinea=  (<HTMLSelectElement>document.getElementById("seccionlinea"));
  console.log(seccionLinea)
  
  if(seleccionlinea === "linea"){
    
    seccionLinea.style.display = "block";

  }else{
    
    seccionLinea.style.display = "none";
  }


}

}


