import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { hero } from './models/hero';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseURL:string = "http://localhost:4201/api"
  constructor(private http: HttpClient) { }

  getHeros():Observable<hero[]>
  {
    return this.http.get<hero[]>(this.baseURL+'/heroes');
  }

  postHeros(value:hero): Observable<hero> {
    return this.http.post<hero>(this.baseURL+'/heroes',value);
  }

}
