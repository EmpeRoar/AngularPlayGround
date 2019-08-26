import { Component, OnInit, ViewChild, OnDestroy, Output, EventEmitter } from '@angular/core';
import { NgForm, ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-ngformx',
  templateUrl: './ngformx.component.html',
  styleUrls: ['./ngformx.component.css']
})
export class NgformxComponent implements OnInit, OnDestroy {

  constructor() { }

  @ViewChild('myForm', {static: true}) form: NgForm;


  @Output() OnSaveAs: EventEmitter<any> = new EventEmitter();

  ngOnDestroy(): void {

  }


  ngOnInit() {
  }

  public setOptions() {

    return ['mercury', 'venus', 'earth', 'mars' ];

  }

  public wrapupAndSave(event: any) {
    console.log(event);
    this.OnSaveAs.emit(event);
  }
}
