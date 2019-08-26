import { CustomerService } from './../../services/customer.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {


  good: boolean;

  customerForm: FormGroup;
  customer: any;
  listOfItems: string[];
  constructor(private fb: FormBuilder, private customerService: CustomerService) { }

  ngOnInit() {
    this.customerForm = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]]
    });
    this.good = false;
    this.listOfItems = ['apple', 'banana', 'coconut'];
  }

  public getListOfItems() {
    return this.listOfItems;
  }
  onSubmit() {
    this.customer = this.customerForm.value;
  }

  testCustomerEndpoint() {
    this.customerService.addCustomer({});
  }

}
