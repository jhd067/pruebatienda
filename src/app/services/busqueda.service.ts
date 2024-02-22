import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BusquedaService {
  private key = 'PCHOyEfKmbHANe61cYo48nEcNf7ubMhFRH1ZyQLIXfTqr9t9788vRV62SY9jwLalC4w0hcxIGIkeb0LCkGw61tZZnpP3RUYYj06ZOisfatLc4aTWhZcI1QujAzHjdY3fck0WcRx5qCLrILxWvrCgWHWC6VTL5nip51Y4IgepO0acdtfKt78e3NZQEEtN276xo98TlMmJMCLHwfRlIhOHzjQR5EdKOdSs3bg31YP8reauVSMXZG75WWjRV6OSJciAFvIsPGJvtnv5lhw8JlYZ1ZMdrAjiYAjcN02GhjcfFfZ2Vtb3GTDSJczNiC1EnTD1Ypjds1qXrhtw6TiTd5nzEEeeCvbNksI9VuLTiFesBmRAgVMyRmdr3VPyKVFSFyEpVbqPle99iPKCtEIjQ1WuK9RN4IfowwnHWgcN2rNtqbw9qKU2nwT2Vul3d9kAG1kQapOkBfCDpqQv7i6jhObqZyLLeHkHMfkZLcebfh37b8oj5B49MZ6tO9IFS0i4yiYgRvJy9BhpkwMj2BId7kdBR7CgEclWnXTrgKvo8ZZhjhXg0r0XjlDoq16oAqfxNXOEb9EI8VgXUcZozng470xZB3bmyA9ci9FMUZw6NPHTPQcvqW6iY9AbC42qYu35mn69cDmmanRjPQzVHGHUt3FlLSmrbxpRRaf3lcmUGEIh71KCLz7UWE2JE0BPf8F16kSWge6GUhY6FhZKdEch3x4gQsFFBahHnYI8oC1m0nzok1F3q46cbunuPgFVC1A3a8POBzL1izg6ALTBEDq2lZQgQDwX50VDuEjVl9sNwhYywWZmLljA0w9Hr3cPeeI7BgibzJ3yTTBlKjubp7BctY9mlmUI7a1xQc6BzFtDy5ofQYAVe5pgAoiDxLmZXFa9evTALihRE0uELfEWnkhufSVgpbLQwnpOVdjpAhbm4MfPSCiefJRW8tLhsOZWfduy0ZvWuaetWSRGgcS2zVceKEWIb5YRteQQ6UEN2CVPFAIPF7pO2LY8ogesUt6x9yCMQ2Bn';
  private apiUrl = 'https://siisa.processoft.com.co/WS/PROCESSOFT/tienda_virtual.php';
 private apiUrl2=  'https://siisa.processoft.com.co/WS/PROCESSOFT/tienda_virtual_c.php';
  


  constructor(private httpClient: HttpClient,) { }
  
    getPlaca(inputBusqueda: string) {
      const data = {
        p_access: this.key,
        action: '_get_consultavinplaca',
        placa: inputBusqueda,
        
      }

      
      const params = new HttpParams({ fromObject: data });
      return this.httpClient.get<any>(this.apiUrl, { params });



    }
    

  getVin(inputBusqueda: string) {
    const data = {
      p_access: this.key,
      action: '_get_consultavinplaca',   
      vin: inputBusqueda,
     
    }
   
    const params = new HttpParams({ fromObject: data });
    return this.httpClient.get<any>(this.apiUrl, { params });
  


  }
 

  getReferencia(inputBusqueda: string) {
    const data = {
      p_access: this.key,
      action: '_get_disponible',      
      referencia: inputBusqueda,
    }
    console.log(data);
    
    const params = new HttpParams({ fromObject: data });
    return this.httpClient.get<any>(this.apiUrl2, { params });

  }
}
