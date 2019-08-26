import { Injectable } from '@angular/core';
import { PgHttpService } from './pg-http.service';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private pgService: PgHttpService) { }

  public addCustomer(payload: any) {
    return this.pgService.post('/api/customer', payload);
  }
}
