import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'

})
export class RestService {
  get: any;

  constructor(private http : HttpClient) { }

  public getIndicadores() {
    return this.http.get('http://localhost:3000/indicador');
  }
}
