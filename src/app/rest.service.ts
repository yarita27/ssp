import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Criterio } from './criterio/criterio.component';
import { Indicador } from './indicadores/indicadores.component';
import { Unidad } from './unidades/unidades.component';

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

  getCriteriosActivos() : Observable <Criterio[]>{
    return this.http.get<Criterio[]>(this.urlApi + '/criterio/activos').pipe(res=>res);
  }

  postCriterio(criterio : Criterio) : Observable <any>{
    return this.http.post<Criterio>(this.urlApi + '/criterio', criterio).pipe(res=>res);
  }

  updateCriterio(id : number , criterio : Criterio) : Observable <any>{
    return this.http.put<Criterio>(this.urlApi + '/criterio', { id, criterio }, { observe: 'body' }).pipe(res=>res);
  }

  deleteCriterio( id : number) : Observable <any>{
    return this.http.delete<Criterio>(this.urlApi + '/criterio', {body : {id}}).pipe(res=>res);
  }

  //INDICADOR
  //Obtener todos los indicadores
  getIndicadores() : Observable <Indicador[]>{
    return this.http.get<Indicador[]>(this.urlApi + '/indicador').pipe(res=>res);
  }

  getIndicadoresActivos() : Observable <Indicador[]>{
    return this.http.get<Indicador[]>(this.urlApi + '/indicador/activos').pipe(res=>res);
  }

  postIndicador(indicador : Indicador) : Observable <any>{
    return this.http.post<Indicador>(this.urlApi + '/indicador', indicador).pipe(res=>res);
  }

  updateIndicador(id_criterio : number, id : number , indicador : Indicador) : Observable <any>{
    return this.http.put<Indicador>(this.urlApi + '/indicador', { id_criterio, id, indicador }, { observe: 'body' }).pipe(res=>res);
  }

  deleteIndicador(id_criterio : number, id : number) : Observable <any>{
    return this.http.delete<Indicador>(this.urlApi + '/indicador', {body : {id_criterio, id}}).pipe(res=>res);
  }


  //UNIDAD
  //Obtener todas las unidades
  getUnidades() : Observable <any>{
    return this.http.get<any>(this.urlApi + '/unidad').pipe(res=>res);
  }

  getUnidadesActivas() : Observable <Unidad[]>{
    return this.http.get<Unidad[]>(this.urlApi + '/unidad/activos').pipe(res=>res);
  }

  postUnidad(unidad : Unidad) : Observable <any>{
    return this.http.post<Unidad>(this.urlApi + '/unidad', unidad).pipe(res=>res);
  }

  updateUnidad(id : number , unidad : Unidad) : Observable <any>{
      return this.http.put<Unidad>(this.urlApi + '/unidad', { id, unidad }, { observe: 'body' }).pipe(res=>res);
  }

  deleteUnidad(id: number): Observable<any> {
      return this.http.delete<Unidad>(this.urlApi + '/unidad', {body : {id}}).pipe(res => res);
  }


  //ASIGNACION
  //Obtener todas las asignaciones  
  getAsignaciones() : Observable <any>{
    return this.http.get<any>(this.urlApi + '/asignacion/all').pipe(res=>res);
  }

  getAsignacionesByAnio(anio: number): Observable<any> {
    return this.http.get<any>(`${this.urlApi}/asignacion/${anio}`).pipe(res => res);
  }

  getAniosAsignados(): Observable <any> {
      return this.http.get<any>(this.urlApi + '/asignacion/anios/actuales').pipe(res=>res);
  }


  getIndicadoresByAnio(anio: number): Observable<any> {
    return this.http.get<any>(`${this.urlApi}/asignacion/indicadores/${anio}`).pipe(res => res);
  }


  getUnidadesByAnio(anio: number): Observable<any> {
    return this.http.get<any>(`${this.urlApi}/asignacion/unidades/${anio}`).pipe(res => res);
  }


  guardarMatriz(matriz : any) : Observable <any>{
    return this.http.post<any>(this.urlApi + '/asignacion', matriz).pipe(res=>res);
  }


}
