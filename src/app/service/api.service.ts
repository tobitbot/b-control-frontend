import { ObserversModule } from '@angular/cdk/observers';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormArray } from '@angular/forms';
import { Observable, retry } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = "http://localhost:3000"

  constructor(private httpClient: HttpClient) { }

  public getStatus(): Observable<any> {
    return this.httpClient.get(this.baseUrl + "/" + "overallstatus");
  }

  public get(route: string): Observable<any> {
    return this.httpClient.get(this.baseUrl + "/" + route)
  }

  public post(route: string, data: any | undefined): Observable<any> {
    return this.httpClient.post(this.baseUrl + "/" + route, data);
  }
}
