import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-escaner-qr',
  templateUrl: './escaner-qr.page.html',
  styleUrls: ['./escaner-qr.page.scss'],
})
export class EscanerQRPage implements OnInit {

  segment = 'scan';
  
  constructor() { }

  ngOnInit() {
  }

}
