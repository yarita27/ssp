import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Criterio } from './criterio/criterio.component';

@Injectable({
  providedIn: 'root'

})
export class RestService {

  private urlApi : string = 'http://localhost:3000';
  constructor(private http : HttpClient) { }

  //ADMINISTRADOR
  //Obtener todos los administradores
  getAdministradores() : Observable <any>{
    return this.http.get<any>(this.urlApi + '/admin').pipe(res=>res);
  }



  //CRITERIO
  //Obtener todos los criterios
  getCriterios() : Observable <Criterio[]>{
    return this.http.get<Criterio[]>(this.urlApi + '/criterio').pipe(res=>res);
  }

  postCriterio(criterio : Criterio) : Observable <any>{
    return this.http.post<Criterio>(this.urlApi + '/criterio', criterio).pipe(res=>res);
  }

  deleteCriterio( id : number) : Observable <any>{
    return this.http.delete<any>(this.urlApi + '/criterio').pipe(res=>res);
  }

  //INDICADOR
  //Obtener todos los indicadores
  getIndicadores() : Observable <any>{
    return this.http.get<any>(this.urlApi + '/indicador').pipe(res=>res);
  }




  //UNIDAD
  //Obtener todas las unidades
  getUnidades() : Observable <any>{
    return this.http.get<any>(this.urlApi + '/unidad').pipe(res=>res);
  }





  //ASIGNACION
  //Obtener todas las asignaciones  
  getAsignaciones() : Observable <any>{
    return this.http.get<any>(this.urlApi + '/asignacion').pipe(res=>res);
  }



}
