import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = environment.apiUrl + "/api/";

  constructor(private httpClient: HttpClient) { }

  public getStatus(): Observable<any> {
    return this.httpClient.get(this.baseUrl + "status");
  }

  public get(route: string): Observable<any> {
    return this.httpClient.get(this.baseUrl + route);
  }
}
