import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LineaService } from '../../services/linea.service';
import { BusquedaService } from 'src/app/services/busqueda.service';
import { catchError } from 'rxjs/operators';
import {FormBuilder, FormGroup, NgForm} from '@angular/forms';
import { of } from 'rxjs';





@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',

})
export class HomeComponent {

 // busqueda: string = '';
  anosModelo: any[] = [];
  familia: any[] = [];
  caja: any[] = [];
  valuefamilia: any[] = [];
  valuecaja: any[] = [];
  selectedInfo!: string;
  vin: any[] = [];  
  placa: any[] = [];
  inputBusqueda!: string;
  jsonData!: string;
  selectedInfoCombustible!: string;
  selectedValue: any;
  selectedCombustibleValue: any;
  formulario: any;
  form: FormGroup = this.fb.group({
    busqueda: (''),
})
  constructor(private http: HttpClient, private lineaService: LineaService, private busquedaService: BusquedaService, private router: Router, private fb:FormBuilder ) {
  

  }

  ngOnInit(): void {

    // this.lineaService.getModelo();
    this.obtenerAnosModelo();
    this.obtenerFamilia();
    this.obtenerIdFamilia();
    this.obtenerIdCajaCambios();
    // this.lineaService.obtenerFamilia();

  }
  obtenerAnosModelo() {
    this.lineaService.getAnosModelo()
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
    this.lineaService.getFamilia()
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
    //console.log(this.selectedInfo);
    this.lineaService.getcajaCambios(this.selectedInfo)
      .pipe(
        catchError(error => {
          console.error('Error al obtener los datos:', error);
          return of([]); // Devuelve un observable vacío en caso de error
        })
      )
      .subscribe((response: any) => {


        if (response && response.success === 'true') {
          this.caja = response.datos.retorno.map((elemento: { tbtransmision_descripcion: any; }) => elemento.tbtransmision_descripcion);
          this.valuecaja = response.datos.retorno.map((elemento: { tbtransmision_codigo: any; }) => elemento.tbtransmision_codigo);



        } else {
          console.error('La solicitud a la API no fue exitosa');
        }
      });

  }

  obtenerCajaCambios() {
    this.lineaService.getcajaCambios(this.selectedInfo)
      .pipe(
        catchError(error => {
          console.error('Error al obtener los datos:', error);
          return of([]); // Devuelve un observable vacío en caso de error
        })
      )
      .subscribe((response: any) => {


        if (response && response.success === 'true') {
          this.caja = response.datos.retorno.map((elemento: { tbtransmision_descripcion: any; }) => elemento.tbtransmision_descripcion);
          this.valuecaja = response.datos.retorno.map((elemento: { tbtransmision_codigo: any; }) => elemento.tbtransmision_codigo);



        } else {
          console.error('La solicitud a la API no fue exitosa');
        }
      });






  }
  obtenerIdCajaCambios() {
    this.selectedValue = (<HTMLSelectElement>document.getElementById("familia")).value;
    this.selectedInfo = this.valuefamilia[this.familia.indexOf(this.selectedValue)];
    this.selectedCombustibleValue = (<HTMLSelectElement>document.getElementById("caja")).value;
    this.selectedInfoCombustible = this.caja[this.familia.indexOf(this.selectedValue)];

    this.lineaService.getCombustible({ selectedInfo: this.selectedInfo })
      .pipe(
        catchError(error => {
          console.error('Error al obtener los datos:', error);
          return of([]); // Devuelve un observable vacío en caso de error
        })
      )
      .subscribe((response: any) => {


        if (response && response.success === 'true') {
          this.caja = response.datos.retorno.map((elemento: { tbtransmision_descripcion: any; }) => elemento.tbtransmision_descripcion);
          this.valuecaja = response.datos.retorno.map((elemento: { tbtransmision_codigo: any; }) => elemento.tbtransmision_codigo);




        } else {
          console.error('La solicitud a la API no fue exitosa');
        }
      });

  }

  capturarDatos() {

    // this.busqueda.reset(); 
    // (<HTMLSelectElement>document.getElementById("busqueda")).reset();
    //document.getElementById('capturar').reset();
    var seleccionBusqueda = (<HTMLSelectElement>document.getElementById("seleccionLinea")).value;
    
   this.inputBusqueda = (<HTMLInputElement>document.getElementById("busqueda")).value;
   
   if(seleccionBusqueda === 'vin'){
    var datosBusquedaVin: { opcionEleccion: string, textoBusquedavin: string  } = {
      opcionEleccion: seleccionBusqueda,
      textoBusquedavin: this.inputBusqueda    
       };
       this.router.navigate(['/repuestos', datosBusquedaVin.textoBusquedavin]);
   
   } else if(seleccionBusqueda === 'placa'){
    var datosBusquedaPlaca: { opcionEleccion: string, textoBusquedaPlaca: string  } = {
      opcionEleccion: seleccionBusqueda,
      textoBusquedaPlaca: this.inputBusqueda    
         
    };

    this.router.navigate(['/repuestos', datosBusquedaPlaca.textoBusquedaPlaca]);
    

   }
   else if(seleccionBusqueda === 'referencia'){
    var datosBusquedaReferencia: { opcionEleccion: string, textoBusquedaReferencia: string  } = {
      opcionEleccion: seleccionBusqueda,
      textoBusquedaReferencia: this.inputBusqueda    
         
    };
   
    this.router.navigate(['/repuestos', datosBusquedaReferencia.textoBusquedaReferencia]);
    

   }
  

    // // Hacer algo con el objeto, por ejemplo, mostrarlo en la consola
    
  }
  mostrarLinea() {
    this.form.reset();

    var seleccionlinea = (<HTMLSelectElement>document.getElementById("seleccionLinea")).value;
    var seccionLinea = (<HTMLSelectElement>document.getElementById("seccionlinea"));
    var seccionInputEntrada = (<HTMLSelectElement>document.getElementById("busqueda"))
    var seccionBtnSearch = (<HTMLSelectElement>document.getElementById("btn-search"))


    if (seleccionlinea === "linea") {

      seccionLinea.style.display = "block";
      seccionInputEntrada.style.display = "none";
      seccionBtnSearch.style.display = "none";

    } else {

      seccionLinea.style.display = "none";
      seccionInputEntrada.style.display = "block";
      seccionBtnSearch.style.display = "block";

    }


  }

}




function resetForm(value: any, arg1: undefined) {
  throw new Error('Function not implemented.');
}

