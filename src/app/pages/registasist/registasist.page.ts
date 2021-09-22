import { Component, OnInit } from '@angular/core';

import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { Base64ToGallery } from '@ionic-native/base64-to-gallery/ngx';

@Component({
  selector: 'app-registasist',
  templateUrl: './registasist.page.html',
  styleUrls: ['./registasist.page.scss'],
})
export class RegistasistPage implements OnInit {

  qrData="Seccion/003/hora/00:00/fecha/00-00-00";

  elementType: 'url' | 'img' | 'canvas' = 'canvas';

  constructor(private barcodeScanner : BarcodeScanner,
              private base64ToGallery: Base64ToGallery) { }

  ngOnInit() {
  }

  scannerCode(){

  }
}
