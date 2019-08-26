import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PgHttpService {

  url: string;
  constructor(private http: HttpClient) {
    this.url = environment.url;
  }

  public get(endpoint: string, query: any) {
    const headers = new HttpHeaders();
    return this.http.get(this.url + endpoint, { headers });
  }
  public post(endpoint: string, payload: any) {
    const headers = new HttpHeaders();
    return this.http.post(this.url + endpoint, payload, { headers });
  }

  public delete(endpoint: string, payload: any) {
    const headers = new HttpHeaders();
    return this.http.delete(this.url + endpoint, { headers });
  }

  public put(endpoint: string, payload: any) {
    const headers = new HttpHeaders();
    return this.http.put(this.url + endpoint, payload, {  headers });
  }

  public patch(endpoint: string, payload: any) {
    const headers = new HttpHeaders();
    return this.http.patch(this.url + endpoint, payload, {  headers });
  }
}
