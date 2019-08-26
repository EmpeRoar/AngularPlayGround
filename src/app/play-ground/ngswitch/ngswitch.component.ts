import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngswitch',
  templateUrl: './ngswitch.component.html',
  styleUrls: ['./ngswitch.component.css']
})
export class NgswitchComponent implements OnInit {


  customers: any[];

  constructor() { }

  ngOnInit() {
    this.customers = [
      {
        Name: 'Vlad',
        Type: 1,
        Email: 'vlad@bacosa.com'
      },

      {
        Name: 'Devil Julius',
        Type: 10,
        Email: 'julius@bacosa.com'
      },
      {
        Name: 'Julius',
        Type: 2,
        Email: 'julius@bacosa.com'
      },
      {
        Name: 'Faith',
        Type: 3,
        Email: 'meme@bacosa.com'
      }
    ]
  }



}
