import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
 
})
export class SidebarComponent {
    constructor(private http: HttpClient,    ) {
   

  }
  ngOnInit(): void {

    // this.lineaService.getModelo();
    this.obtenerValorSeleccionado();
  

  }
  
  obtenerGrupo(){


  }
   obtenerValorSeleccionado() {
    // const formulario :null = document.querySelector('.form-check');
    // const entradasRadio = formulario.querySelectorAll('input[type="radio"]');
    
    // entradasRadio.forEach(entradaRadio => {
    //   entradaRadio.addEventListener('click', (evento) => {
    //     const radioSeleccionado = evento.target as HTMLInputElement;
    //     const valorSeleccionado = radioSeleccionado.value; // Accede al valor del radio seleccionado
    //     const idSeleccionado = radioSeleccionado.id; // Accede al ID del radio seleccionado
    
    //     console.log(`Botón de radio seleccionado: ${idSeleccionado} (valor: ${valorSeleccionado})`);
    //     Realiza las acciones que deseas en función del valor o ID seleccionado
    
    //     Ejemplo de acción: Actualiza un elemento DOM para reflejar la selección
    //     const etiquetaSeleccionada = document.querySelector(`label[for="${idSeleccionado}"]`);
    //     if (etiquetaSeleccionada) {
    //       etiquetaSeleccionada.classList.add('seleccionado'); // Agrega una clase para indicar la selección
    //     }
    //   });
    // });
    
   
  }
  


 

}
