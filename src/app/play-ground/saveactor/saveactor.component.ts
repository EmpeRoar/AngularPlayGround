import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-saveactor',
  templateUrl: './saveactor.component.html',
  styleUrls: ['./saveactor.component.css']
})
export class SaveactorComponent implements OnInit {

  @Output() public Save: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  public saveForm() {
    this.Save.emit('julius bacosa');
  }
}
