import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'

})
export class RestService {

  private urlApi : string = 'http://localhost:3000/criterio';
  constructor(private http : HttpClient) { }


  getCriterios() : Observable <any>{
    //return this.http.get<any>(this.urlApi + '/indicador');
    return this.http.get<any>(this.urlApi).pipe(res=>res);
  }
}
