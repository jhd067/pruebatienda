import { HttpClient } from '@angular/common/http';
import { Component, Input  } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
  import { catchError, of } from 'rxjs';
import { BusquedaService } from 'src/app/services/busqueda.service';





@Component({
  selector: 'app-repuestos',
  templateUrl: './repuestos.component.html',
 
})
export class RepuestosComponent {
  numeroReferencia: any[] = [];
  referencia: any[] = [];
  vin: any[] = [];
  inputBusqueda!: any;
  jsonData: any;
  data: any; 
  datahome: any;
valorPropiedad: any;
datosArreglo: any;
  
  constructor(private http: HttpClient, private busquedaService: BusquedaService, private router: ActivatedRoute,   ) {
   this.router.params.subscribe( params =>{
    
    this.inputBusqueda = (params['inputbusqueda']);
   })


  }
  ngOnInit(): void {

    
   
    this.obtenerVin();
    this.obtenerPlaca();
    this.obtenerReferencia();
   // console.log(this.inputBusqueda);
  

  }

  obtenerVin( ){
    this.busquedaService.getVin (this.inputBusqueda)
    .pipe(
        catchError(error => {
          console.error('Error al obtener los datos:', error);
          return of([]); // Devuelve un observable vacío en caso de error
        })
      )
      .subscribe((response: any) => {
        if (response && response.success === 'true') {
          this.vin = response.datos.retorno.map((elemento: { linecome_descripcomercial: any; }) => elemento.linecome_descripcomercial);
   //    console.log(response);
       
        
         
        } else {
          console.error('La solicitud a la API no fue exitosa');
        }
        
        
      });
   
  
 
  
  }

  obtenerPlaca(){
    this.busquedaService.getPlaca (this.inputBusqueda)
    .pipe(
        catchError(error => {
          console.error('Error al obtener los datos:', error);
          return of([]); // Devuelve un observable vacío en caso de error
        })
      )
      .subscribe((response: any) => {
        if (response && response.success === 'true') {
          this.vin = response.datos.retorno.map((elemento: { linecome_descripcomercial: any; }) => elemento.linecome_descripcomercial);
       //   console.log(response);
          
        
         
        } else {
          console.error('La solicitud a la API no fue exitosa');
        }
        
        
      });

  }

  obtenerReferencia(){

    this.busquedaService.getReferencia (this.inputBusqueda)
    .pipe(
        catchError(error => {
          console.error('Error al obtener los datos:', error);
          return of([]); // Devuelve un observable vacío en caso de error
        })
      )
      .subscribe((response: any) => {
        if (response && response.success === 'true') {          
        
         console.log(response.datos.referencia_nombre);
          this.referencia= response.datos.referencia_nombre;
          this.numeroReferencia= response.datos.referencia_codigo;
         
        } else {
          console.error('La solicitud a la API no fue exitosa');
        }
        
        
      });


  }

}
