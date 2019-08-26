import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pg-select',
  templateUrl: './pg-select.component.html',
  styleUrls: ['./pg-select.component.css']
})
export class PgSelectComponent implements OnInit {

  @Input() items: any[];
  constructor() { }

  ngOnInit() {
  }

}
