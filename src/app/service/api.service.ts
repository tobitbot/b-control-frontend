import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = "http://192.168.178.201/api/";

  constructor(private httpClient: HttpClient) { }

  public getStatus(): Observable<any> {
    return this.httpClient.get(this.baseUrl + "status");
  }

  public get(route: string): Observable<any> {
    return this.httpClient.get(this.baseUrl + route);
  }
}
