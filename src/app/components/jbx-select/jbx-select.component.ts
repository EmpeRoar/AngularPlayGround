import { Component, OnInit, Input } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-jbx-select',
  templateUrl: './jbx-select.component.html',
  styleUrls: ['./jbx-select.component.css']
})
export class JbxSelectComponent implements OnInit, ControlValueAccessor {


  @Input() options: any[];
  @Input() selecttitle: string;
  constructor() { }

  ngOnInit() {

  }

  writeValue(obj: any): void {
    console.log(obj);
  }
  registerOnChange(fn: any): void {
    console.log(fn);
  }
  registerOnTouched(fn: any): void {
    console.log(fn);
  }
  setDisabledState?(isDisabled: boolean): void {

  }

}
