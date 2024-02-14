import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { LineaService } from '../../services/linea.service';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',

})
export class HomeComponent {


  anosModelo: any[] = [];
  familia: any[] = [];
  valuefamilia: any[] = [];
  selectedInfo!: string;
  selectedValue: any;
  constructor(private http: HttpClient, private lineaService: LineaService) {


  }

  ngOnInit(): void {

    // this.lineaService.getModelo();
    this.obtenerAnosModelo();
    this.obtenerFamilia();
    this.obtenerIdFamilia();
    this.lineaService.obtenerFamilia();

  }
  obtenerAnosModelo() {
    this.lineaService.obtenerAnosModelo()
      .pipe(
        catchError(error => {
          console.error('Error al obtener los datos:', error);
          return of([]); // Devuelve un observable vacío en caso de error
        })
      )
      .subscribe((response: any) => {
        if (response && response.success === 'true') {
          this.anosModelo = response.datos.retorno.map((elemento: { vehiculo_annomodelo: any; }) => elemento.vehiculo_annomodelo);
        } else {
          console.error('La solicitud a la API no fue exitosa');
        }
      });



  }
  obtenerFamilia() {
    this.lineaService.obtenerFamilia()
      .pipe(
        catchError(error => {
          console.error('Error al obtener los datos:', error);
          return of([]); // Devuelve un observable vacío en caso de error
        })
      )
      .subscribe((response: any) => {


        if (response && response.success === 'true') {
          this.familia = response.datos.retorno.map((elemento: { tbnombline_descripcion: any; }) => elemento.tbnombline_descripcion);
          this.valuefamilia = response.datos.retorno.map((elemento: { tbnombline_codigo: any; }) => elemento.tbnombline_codigo);


        } else {
          console.error('La solicitud a la API no fue exitosa');
        }
      });


  }
  obtenerIdFamilia() {
    this.selectedValue = (<HTMLSelectElement>document.getElementById("familia")).value;
    this.selectedInfo = this.valuefamilia[this.familia.indexOf(this.selectedValue)];
    console.log(this.selectedInfo);
    this.lineaService.obtenercajaCambios(this.selectedInfo);
  }

  //get



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
  mostrarLinea() {

    var seleccionlinea = (<HTMLSelectElement>document.getElementById("seleccionLinea")).value;
    var seccionLinea = (<HTMLSelectElement>document.getElementById("seccionlinea"));


    if (seleccionlinea === "linea") {

      seccionLinea.style.display = "block";

    } else {

      seccionLinea.style.display = "none";
    }


  }

}


function capturarModelo() {
  throw new Error('Function not implemented.');
}

