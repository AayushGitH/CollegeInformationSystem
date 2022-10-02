import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Info } from './info';

@Injectable({
  providedIn: 'root'
})
export class InfoService {

  constructor(private httpClient: HttpClient) { }
  getAllInfo(): Observable<Info[]>
  {
    return this.httpClient.get<Info[]>("http://localhost:65196/api/informations",{responseType:"json"});
  }
}
